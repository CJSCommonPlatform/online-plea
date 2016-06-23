(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('formFieldsetLegend', {
      templateUrl: 'app/components/form/form-fieldset-legend/form-fieldset-legend.html',
      controller: FormFieldsetLegend,
      controllerAs: 'vm',
      bindings: {
        baseId: '@',
        label: '@',
        hint: '@',
        formField: '<',
        errorMessages: '<'
      }
    });

  function FormFieldsetLegend() {
    var vm = this;
  }

}());