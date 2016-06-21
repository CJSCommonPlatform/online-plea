(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('formInputRadio', {
      controller: FormInputRadioController,
      controllerAs: 'vm',
      templateUrl: 'app/components/form/form-input-radio.html',
      bindings: {
        name: '@',
        value: '@',
        form: '<',
        property: '<',
        onUpdate: '&'
      }
    });

  function FormInputRadioController() {
    var vm = this;

    vm.onClick = function(value) {
      vm.onUpdate({value: value});
    }
  }

}());