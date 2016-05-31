(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('otherExpenses', otherExpenses);

  otherExpenses.$inject = ['sessionStorage'];

  function otherExpenses(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourExpenses.other.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.televisionSubscription = get('televisionSubscription');
      vm.travelExpenses = get('travelExpenses');
      vm.telephone = get('telephone');
      vm.loanRepayments = get('loanRepayments');
      vm.countyCourtOrders = get('countyCourtOrders');
      vm.fines = get('fines');
      vm.childMaintenance = get('childMaintenance');
      vm.otherExpenses = get('otherExpenses');
      vm.otherExpensesDetails = get('otherExpensesDetails');
      vm.otherExpensesMonthly = get('otherExpensesMonthly');
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      set('', undefined);

      set('televisionSubscription', vm.televisionSubscription);
      set('travelExpenses', vm.travelExpenses);
      set('telephone', vm.telephone);
      set('loanRepayments', vm.loanRepayments);
      set('countyCourtOrders', vm.countyCourtOrders);
      set('fines', vm.fines);
      set('childMaintenance', vm.childMaintenance);
      set('otherExpenses', vm.otherExpenses);
      if (vm.otherExpenses === 'Yes') {
        set('otherExpensesDetails', vm.otherExpensesDetails);
        set('otherExpensesMonthly', vm.otherExpensesMonthly);
      }
    }
  }
})();
