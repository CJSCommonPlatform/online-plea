(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourEmploymentFinances', yourEmploymentFinances);

  yourEmploymentFinances.$inject = ['sessionStorage'];

  function yourEmploymentFinances(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourEmployment.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.employmentStatus = get('employmentStatus');
      vm.provideDetails = get('provideDetails');
      vm.sourceIncome = get('sourceIncome');
      vm.paymentFrequency = get('paymentFrequency');

      if (vm.paymentFrequency === 'Weekly') {
        vm.weeklyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Fortnightly') {
        vm.fortnightlyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Monthly') {
        vm.monthlyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Other') {
        vm.otherPay = get('paymentAmount');
      }

      vm.pensionCredit = get('pensionCredit');
      vm.financialProblems = get('financialProblems');
      vm.financialProblemsJustification = get('financialProblemsJustification');
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      set('', undefined);
      set('employmentStatus', vm.employmentStatus);
      set('provideDetails', vm.provideDetails);
      set('sourceIncome', vm.sourceIncome);
      set('paymentFrequency', vm.paymentFrequency);

      if (vm.paymentFrequency === 'Weekly') {
        set('paymentAmount', vm.weeklyPay);
      } else if (vm.paymentFrequency === 'Fortnightly') {
        set('paymentAmount', vm.fortnightlyPay);
      } else if (vm.paymentFrequency === 'Monthly') {
        set('paymentAmount', vm.monthlyPay);
      } else if (vm.paymentFrequency === 'Other') {
        set('paymentAmount', vm.otherPay);
      }

      set('pensionCredit', vm.pensionCredit);
      if (vm.pensionCredit !== 'Yes') {
        sessionStorage.reset('pleaApp.yourPensionCredit');
      }

      set('financialProblems', vm.financialProblems);
      if (vm.financialProblems === 'Yes') {
        set('financialProblemsJustification', vm.financialProblemsJustification);
      } else {
        sessionStorage.reset('pleaApp.yourExpenses.');
        sessionStorage.reset('pleaApp.yourBenefits.');
      }
    }
  }
})();
