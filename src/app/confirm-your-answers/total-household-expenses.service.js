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
      var accomodation = lodash.get(vm, 'pleaApp.yourExpenses.household.accomodation');
      var utilityBills = lodash.get(vm, 'pleaApp.yourExpenses.household.utilityBills');
      var insurance = lodash.get(vm, 'pleaApp.yourExpenses.household.insurance');
      var councilTax = lodash.get(vm, 'pleaApp.yourExpenses.household.councilTax');

      var totalHouseholdExpenses = 0;

      if (accomodation) {
        totalHouseholdExpenses = totalHouseholdExpenses + parseFloat(accomodation);
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