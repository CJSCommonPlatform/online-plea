(function () {
    'use strict';

    angular
      .module('pleaApp')
      .directive('formDate', function() {
        return {
          restrict: 'A',
          require: '^^form',
          link: function(scope, elem, attr, form) {
            var formDate = scope.$eval(attr['formDate']);
            var day = formDate.day;
            var month = formDate.month;
            var year = formDate.year;

            form[day].$validators.required = function(modelValue, viewValue) {
              if (!isFinite(viewValue)) {
                return false;
              }
              if (!isFinite(form[month].value)) {
                return false;
              }
              if (!isFinite(form[year].value)) {
                return false;
              }
              return true;
            };

            form[day].$validators.inPast = function(modelValue, viewValue) {
              return form[year].value > 1900;
            }

            form[day].$validators.inFuture = function(modelValue, viewValue) {
              return new Date(form[year].value, form[month].value, form[month].day).getTime() < new Date().getTime();
            }

            form[day].$validators.invalidMonth = function(modelValue, viewValue) {
              return form[month].value >= 1 && form[month].value <= 12;
            }

            form[day].$validators.atLeast16 = function(modelValue, viewValue) {
              var minus16Years = new Date();
              minus16Years.setMonth(minus18Years.getMonth() - 12 * 18);
              return new Date(form[year].value, form[month].value, form[day].value).getTime() > minus16Years.getTime();
            }

            form[day].$validators.dayOfMonth = function(modelValue, viewValue) {
              if (!isFinite(viewValue)) {
                return false;
              }
              if (!isFinite(form[month].value)) {
                return false;
              }
              if (!isFinite(form[year].value)) {
                return false;
              }
              var lastDayOfMonth = new Date(form[year].value, form[month].value, 0).getDate();
              return viewValue <= lastDayOfMonth;
            };

            form[month].$validators.monthOfYear = function(modelValue, viewValue) {
              form[month].value = viewValue;
              form[day].$validate();
              return true;
            };

            form[year].$validators.year = function(modelValue, viewValue) {
              form[year].value = viewValue;
              form[day].$validate();
              return true;
            }
          }
        };
    });
})();