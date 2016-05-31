(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourBenefits', yourBenefits);

  yourBenefits.$inject = ['sessionStorage'];

  function yourBenefits(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourBenefits.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.benefit = get('benefit');
      vm.benefitFrequency = get('benefitFrequency');

      if (vm.benefitFrequency === 'Weekly') {
        vm.weeklyBenefitPay = get('benefitAmount');
      } else if (vm.benefitFrequency === 'Fortnightly') {
        vm.fortnightlyBenefitPay = get('benefitAmount');
      } else if (vm.benefitFrequency === 'Monthly') {
        vm.monthlyBenefitPay = get('benefitAmount');
      }

      vm.financialProblems = get('financialProblems');
      vm.financialProblemsJustification = get('financialProblemsJustification');
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      sessionStorage.reset(BASE_NAME);

      set('benefit', vm.benefit);
      set('benefitFrequency', vm.benefitFrequency);

      if (vm.benefitFrequency === 'Weekly') {
        set('benefitAmount', vm.weeklyBenefitPay);
      } else if (vm.benefitFrequency === 'Fortnightly') {
        set('benefitAmount', vm.fortnightlyBenefitPay);
      } else if (vm.benefitFrequency === 'Monthly') {
        set('benefitAmount', vm.monthlyBenefitPay);
      }

      set('financialProblems', vm.financialProblems);

      if (vm.financialProblems === 'Yes') {
        set('financialProblemsJustification', vm.financialProblemsJustification);
      } else {
        sessionStorage.reset('pleaApp.yourExpenses.');
      }
    }
  }
})();
