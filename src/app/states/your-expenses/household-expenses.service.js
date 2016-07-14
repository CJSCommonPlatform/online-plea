(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('householdExpenses', householdExpenses);

  householdExpenses.$inject = ['sessionStorage'];

  function householdExpenses(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourExpenses.household.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.accommodation = get('accommodation');
      vm.utilityBills = get('utilityBills');
      vm.insurance = get('insurance');
      vm.councilTax = get('councilTax');
      vm.contribute = get('contribute');
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      set('accommodation', vm.accommodation);
      set('utilityBills', vm.utilityBills);
      set('insurance', vm.insurance);
      set('councilTax', vm.councilTax);
      set('contribute', vm.contribute);
    }
  }
})();
