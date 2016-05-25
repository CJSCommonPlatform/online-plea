(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalOtherExpenses', totalOtherExpenses);

  function totalOtherExpenses() {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var televisionSubscription = _.get(vm, 'pleaApp.yourExpenses.other.televisionSubscription');
      var travelExpenses = _.get(vm, 'pleaApp.yourExpenses.other.travelExpenses');
      var telephone = _.get(vm, 'pleaApp.yourExpenses.other.telephone');
      var loanRepayments = _.get(vm, 'pleaApp.yourExpenses.other.loanRepayments');
      var countyCourtOrders = _.get(vm, 'pleaApp.yourExpenses.other.countyCourtOrders');
      var fines = _.get(vm, 'pleaApp.yourExpenses.other.fines');
      var childMaintenance = _.get(vm, 'pleaApp.yourExpenses.other.childMaintenance');
      var otherExpensesMonthly = _.get(vm, 'pleaApp.yourExpenses.other.otherExpensesMonthly');

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
      if (otherExpensesMonthly) {
        totalOtherExpenses = totalOtherExpenses + parseFloat(otherExpensesMonthly);
      }

      return totalOtherExpenses;
    }
  }
  
})();