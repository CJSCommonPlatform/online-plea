(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalIncome', totalIncome);

  function totalIncome(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var paymentAmount = lodash.get(vm, 'pleaApp.yourEmployment.paymentAmount');
      var benefitAmount = lodash.get(vm, 'pleaApp.yourBenefits.benefitAmount');
      var pensionCreditAmount = lodash.get(vm, 'pleaApp.yourPensionCredit.pensionCreditAmount');

      var totalIncome = 0;

      if (paymentAmount) {
        totalIncome = totalIncome + parseFloat(paymentAmount);
      }
      if (benefitAmount) {
        totalIncome = totalIncome + parseFloat(benefitAmount);
      }
      if (pensionCreditAmount) {
        totalIncome = totalIncome + parseFloat(pensionCreditAmount);
      }

      return totalIncome;
    }
  }
})();