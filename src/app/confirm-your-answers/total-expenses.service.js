(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalExpenses', totalExpenses);

  function totalExpenses(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var totalHouseholdExpenses = lodash.get(vm, 'pleaApp.yourExpenses.household.totalHouseholdExpenses');
      var totalOtherExpenses = lodash.get(vm, 'totalOtherExpenses');

      var totalExpenses = 0;

      if (totalHouseholdExpenses) {
        totalExpenses = totalExpenses + parseFloat(totalHouseholdExpenses);
      }
      if (totalOtherExpenses) {
        totalExpenses = totalExpenses + parseFloat(totalOtherExpenses);
      }

      return totalExpenses;
    }
  }
})();