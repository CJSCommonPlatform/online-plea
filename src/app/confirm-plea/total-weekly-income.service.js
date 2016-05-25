(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalWeeklyIncome', totalWeeklyIncome);

  function totalWeeklyIncome() {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var paymentAmount = _.get(vm, 'pleaApp.yourEmployment.paymentAmount');
      var benefitAmount = _.get(vm, 'pleaApp.yourBenefits.benefitAmount');

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