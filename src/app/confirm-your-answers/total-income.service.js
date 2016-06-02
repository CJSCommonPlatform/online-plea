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

      var totalIncome = 0;

      if (paymentAmount) {
        totalIncome = totalIncome + parseFloat(paymentAmount);
      }
      if (benefitAmount) {
        totalIncome = totalIncome + parseFloat(benefitAmount);
      }

      return totalIncome;
    }
  }
})();