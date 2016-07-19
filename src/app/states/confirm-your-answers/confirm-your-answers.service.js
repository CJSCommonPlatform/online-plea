(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('confirmYourAnswers', confirmYourAnswers);

  confirmYourAnswers.$inject = ['totalWeeklyIncome', 'totalHouseholdExpenses', 'totalOtherExpenses', 'totalExpenses', 'sessionStorage', 'lodash', 'yourDetailsRetrieve'];

  function confirmYourAnswers(totalWeeklyIncome, totalHouseholdExpenses, totalOtherExpenses, totalExpenses, sessionStorage, lodash, yourDetailsRetrieve) {
    var BASE_NAME = '';

    var service = {
      updateVm: updateVm
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.pleaApp = get('pleaApp');

      lodash.set(vm, 'defendantDetails', yourDetailsRetrieve.retrieve());

      lodash.set(vm, 'yourEmployment.totalWeeklyIncome', totalWeeklyIncome.calculate(vm));
      lodash.set(vm, 'yourExpenses.household.totalHouseholdExpenses', totalHouseholdExpenses.calculate(vm));
      lodash.set(vm, 'yourExpenses.other.totalOtherExpenses', totalOtherExpenses.calculate(vm));

      var otherSignificantExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpenses');
      lodash.set(vm, 'yourExpenses.other.otherSignificantExpensesDetails', 'None');
      if (otherSignificantExpenses === 'Yes') {
        lodash.set(vm, 'yourExpenses.other.otherSignificantExpensesDetails', lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpensesDetails'));
      }

      var employmentStatus = lodash.get(vm, 'pleaApp.yourEmployment.employmentStatus');
      lodash.set(vm, 'yourEmployment.employmentStatus', employmentStatus);
      if (employmentStatus === 'Other') {
        lodash.set(vm, 'yourEmployment.employmentStatus', lodash.get(vm, 'pleaApp.yourEmployment.provideDetails'));
      }

      lodash.set(vm, 'yourExpenses.totalExpenses', totalExpenses.calculate(vm));
    }
  }
})();
