(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalWeeklyIncome', totalWeeklyIncome);

  /* @ngInject */
  function totalWeeklyIncome(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var paymentAmount = lodash.get(vm, 'pleaApp.yourEmployment.paymentAmount');
      var paymentFrequency = lodash.get(vm, 'pleaApp.yourEmployment.paymentFrequency');
      var benefitAmount = lodash.get(vm, 'pleaApp.yourBenefits.benefitAmount');
      var benefitFrequency = lodash.get(vm, 'pleaApp.yourBenefits.benefitFrequency');
      var pensionCreditAmount = lodash.get(vm, 'pleaApp.yourPensionCredit.pensionCreditAmount');
      var pensionCreditFrequency = lodash.get(vm, 'pleaApp.yourPensionCredit.pensionCreditFrequency');

      var totalWeeklyIncome = 0;

      if (paymentAmount) {
        totalWeeklyIncome += toWeeklyAmount(parseFloat(paymentAmount), paymentFrequency);
      }
      if (benefitAmount) {
        totalWeeklyIncome += toWeeklyAmount(parseFloat(benefitAmount), benefitFrequency);
      }
      if (pensionCreditAmount) {
        totalWeeklyIncome += toWeeklyAmount(parseFloat(pensionCreditAmount), pensionCreditFrequency);
      }

      return totalWeeklyIncome;
    }

    function toWeeklyAmount(amount, frequency) {
      if ("Monthly" === frequency) {
        return (amount * 12) / 52;
      } else if ("Fortnightly" === frequency) {
        return amount / 2;
      } else {
        return amount;
      }
    }
  }
})();
