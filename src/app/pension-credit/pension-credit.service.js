(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('pensionCredit', pensionCredit);

  pensionCredit.$inject = ['sessionStorage'];

  function pensionCredit(sessionStorage) {
    var BASE_NAME = 'pleaApp.pensionCredit.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.pensionCreditFrequency = get('pensionCreditFrequency');

      if (vm.pensionCreditFrequency === 'Weekly') {
        vm.weeklyPensionCreditPay = get('pensionCreditAmount');
      } else if (vm.pensionCreditFrequency === 'Fortnightly') {
        vm.fortnightlyPensionCreditPay = get('pensionCreditAmount');
      } else if (vm.pensionCreditFrequency === 'Monthly') {
        vm.monthlyPensionCreditPay = get('pensionCreditAmount');
      }
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      set('pensionCreditFrequency', vm.pensionCreditFrequency);

      if (vm.pensionCreditFrequency === 'Weekly') {
        set('pensionCreditAmount', vm.weeklyPensionCreditPay);
      } else if (vm.pensionCreditFrequency === 'Fortnightly') {
        set('pensionCreditAmount', vm.fortnightlyPensionCreditPay);
      } else if (vm.pensionCreditFrequency === 'Monthly') {
        set('pensionCreditAmount', vm.monthlyPensionCreditPay);
      }
    }
  }
})();
