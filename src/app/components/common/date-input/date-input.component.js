(function () {
/*
  'use strict';

  angular
    .module('cpp-ui-spa-master.application')
    .controller('DateInputController', DateInputController)
    .component('dateInput', {
      templateUrl: 'app/components/application/directives/date-input/date-input.component.tpl.html',
      controller: 'DateInputController',
      require: {
        ngModel: '?ngModel',
        parentForm: '?^^form'
      }
    });

  function DateInputController($filter, $scope, $document, $timeout, lodash) {

    var vm = this;
    var dateFields = ['dateDay', 'dateMonth', 'dateYear'];

    vm.communicate = false;

    // Actions...
    vm.$onInit = Initialise;
    vm.$postLink = postLink;
    vm.onChange = onChange;
    vm.onBlur = onBlur;

    function Initialise() {
      // model value is updated once
      var cancel = $scope.$watch(
        function () {
          return vm.ngModel.$modelValue;
        },
        function (newValue) {
          if (newValue) {
            vm.dateDay = $filter('date')(newValue, 'dd');
            vm.dateMonth = $filter('date')(newValue, 'MM');
            vm.dateYear = $filter('date')(newValue, 'yyyy');
            cancel();
          }
        });
    }

    function postLink() {
      // detach from parent, so we can control behaviour internally
      if (vm.parentForm) {
        vm.parentForm.$removeControl(vm.dateForm);
      }
    }

    function onBlur() {
      // communicate validity?
      if (!vm.communicate) {
        $timeout(function () {
          var anyTouched = vm.dateForm.dateDay.$touched || vm.dateForm.dateMonth.$touched || vm.dateForm.dateYear.$touched;
          var anyHasFocus = lodash.find(dateFields, function (field) {
            return $document[0].activeElement.getAttribute('name') === field;
          });

          vm.communicate = anyTouched && !anyHasFocus;
        });
      }
    }

    function onChange() {
      var errors = {};
      var date;
      var isDate = true;

      // evaluate all three date inputs for input & errors
      dateFields.forEach(function (prop) {
        var model = vm.dateForm[prop];
        isDate = isDate && !!model.$modelValue;

        Object.keys(model.$validators).forEach(function (rule) {
          var error = errors[rule] || vm.dateForm[prop].$error[rule];
          if (error) {
            errors[rule] = error;
          }
        });
      });

      // only evaluate validity of date itself, where a full date exists
      if (isDate && !hasError()) {

        //https://github.com/moment/moment/issues/1407
        var _date = moment("'" + vm.dateYear + " " + vm.dateMonth + " " + vm.dateDay + "'", "YYYY MM DD");

        // if no errors found, evaluate validity of entered date
        var valid = _date.isValid();

        date = !valid ? 0 : _date.format('YYYY-MM-DD');
        errors.dateExists = valid;
      }

      // always communicate current value to ngModel
      vm.ngModel.$setViewValue(date);

      if (vm.communicate) {
        Object.keys(errors).forEach(function (rule) {
          var name = lodash.camelCase(['date', 'Input', rule]);
          vm.ngModel.$setValidity(name, errors[rule]);
        });
      }

      vm.ngModel.$commitViewValue();
    }

    function hasError() {
      return Object.keys(vm.dateForm.$error).length > 0;
    }
  }
*/
}());