(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('fieldsetLegend', {
      templateUrl: 'app/components/common/fieldset-legend/fieldset-legend.html',
      controller: FieldsetLegend,
      controllerAs: 'vm',
      bindings: {
        baseId: '@',
        label: '@',
        hint: '@',
        formField: '<',
        errorMessages: '<'
      }
    });

  function FieldsetLegend() {
    var vm = this;
  }

}());