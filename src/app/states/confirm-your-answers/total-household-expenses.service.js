(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('totalHouseholdExpenses', totalHouseholdExpenses);

  function totalHouseholdExpenses(lodash) {
    var service = {
      calculate: calculate
    };

    return service;

    function calculate(vm) {
      var accommodation = lodash.get(vm, 'pleaApp.yourExpenses.household.accommodation');
      var utilityBills = lodash.get(vm, 'pleaApp.yourExpenses.household.utilityBills');
      var insurance = lodash.get(vm, 'pleaApp.yourExpenses.household.insurance');
      var councilTax = lodash.get(vm, 'pleaApp.yourExpenses.household.councilTax');

      var totalHouseholdExpenses = 0;

      if (accommodation) {
        totalHouseholdExpenses = totalHouseholdExpenses + parseFloat(accommodation);
      }
      if (utilityBills) {
        totalHouseholdExpenses = totalHouseholdExpenses + parseFloat(utilityBills);
      }
      if (insurance) {
        totalHouseholdExpenses = totalHouseholdExpenses + parseFloat(insurance);
      }
      if (councilTax) {
        totalHouseholdExpenses = totalHouseholdExpenses + parseFloat(councilTax);
      }

      return totalHouseholdExpenses;
    }
  }
})();