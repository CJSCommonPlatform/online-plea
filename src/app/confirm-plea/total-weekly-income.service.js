(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalWeeklyIncome', totalWeeklyIncome);

  function totalWeeklyIncome(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var paymentAmount = lodash.get(vm, 'pleaApp.yourEmployment.paymentAmount');
      var benefitAmount = lodash.get(vm, 'pleaApp.yourBenefits.benefitAmount');

      var totalWeeklyIncome = 0;

      if (paymentAmount) {
        totalWeeklyIncome = totalWeeklyIncome + parseFloat(paymentAmount);
      }
      if (benefitAmount) {
        totalWeeklyIncome = totalWeeklyIncome + parseFloat(benefitAmount);
      }

      return totalWeeklyIncome;
    }
  }
})();