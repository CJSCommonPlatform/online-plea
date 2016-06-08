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
              if (viewValue < 1 || viewValue > 12) {
                return false;
              }
              form[month].value = viewValue;
              form[day].$validate();
              return true;
            };

            form[year].$validators.year = function(modelValue, viewValue) {
              if (viewValue < 1900 || viewValue > new Date().getFullYear()) {
                return false;
              }
              form[year].value = viewValue;
              form[day].$validate();
              return true;
            }
          }
        };
    });
})();