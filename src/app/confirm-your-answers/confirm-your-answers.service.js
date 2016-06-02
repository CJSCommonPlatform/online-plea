(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('confirmYourAnswers', confirmYourAnswers);

  confirmYourAnswers.$inject = ['totalIncome', 'totalHouseholdExpenses', 'totalOtherExpenses', 'totalExpenses', 'sessionStorage', 'lodash'];

  function confirmYourAnswers(totalIncome, totalHouseholdExpenses, totalOtherExpenses, totalExpenses, sessionStorage, lodash) {
    var BASE_NAME = '';

    var service = {
      updateVm: updateVm
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.pleaApp = get('pleaApp');

      get = sessionStorage.getGetter('pleaApp.yourDetails.');

      var day = get('dateOfBirthDay');
      var month = get('dateOfBirthMonth');
      var year = get('dateOfBirthYear');

      vm.dateOfBirth = new Date(year, month - 1, day);

      lodash.set(vm, 'yourEmployment.totalIncome', totalIncome.calculate(vm));
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
