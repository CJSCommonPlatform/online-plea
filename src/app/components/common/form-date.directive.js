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
              if (!isFinite(form[month].$viewValue)) {
                return false;
              }
              if (!isFinite(form[year].$viewValue)) {
                return false;
              }
              var lastDayOfMonth = new Date(form[year].$viewValue, form[month].$viewValue, 0).getDate();
              return viewValue <= lastDayOfMonth;
            };

            form[month].$validators.monthOfYear = function(modelValue, viewValue) {
              if (viewValue < 1 || viewValue > 12) {
                return false;
              }
              form[day].$validate();
              return true;
            };

            form[year].$validators.year = function(modelValue, viewValue) {
              if (viewValue < 1900 || viewValue > new Date().getFullYear()) {
                return false;
              }
              form[day].$validate();
              return true;
            }
          }
        };
    });
})();