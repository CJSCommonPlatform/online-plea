(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalExpenses', totalExpenses);

  function totalExpenses() {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var totalHouseholdExpenses = _.get(vm, 'totalHouseholdExpenses');
      var totalOtherExpenses = _.get(vm, 'totalOtherExpenses');

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