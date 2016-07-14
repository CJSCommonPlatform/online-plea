(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalOtherExpenses', totalOtherExpenses);

  function totalOtherExpenses(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var televisionSubscription = lodash.get(vm, 'pleaApp.yourExpenses.other.televisionSubscription');
      var travelExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.travelExpenses');
      var telephone = lodash.get(vm, 'pleaApp.yourExpenses.other.telephone');
      var loanRepayments = lodash.get(vm, 'pleaApp.yourExpenses.other.loanRepayments');
      var countyCourtOrders = lodash.get(vm, 'pleaApp.yourExpenses.other.countyCourtOrders');
      var fines = lodash.get(vm, 'pleaApp.yourExpenses.other.fines');
      var childMaintenance = lodash.get(vm, 'pleaApp.yourExpenses.other.childMaintenance');
      var otherSignificantExpensesTotal = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpensesTotal');

      var totalOtherExpenses = 0;

      if (televisionSubscription) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(televisionSubscription);
      }
      if (travelExpenses) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(travelExpenses);
      }
      if (telephone) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(telephone);
      }
      if (loanRepayments) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(loanRepayments);
      }
      if (countyCourtOrders) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(countyCourtOrders);
      }
      if (fines) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(fines);
      }
      if (childMaintenance) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(childMaintenance);
      }
      if (otherSignificantExpensesTotal) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(otherSignificantExpensesTotal);
      }

      return totalOtherExpenses;
    }
  }
  
})();