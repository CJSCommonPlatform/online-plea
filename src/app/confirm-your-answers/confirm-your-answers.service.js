(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('confirmYourAnswers', confirmYourAnswers);

  confirmYourAnswers.$inject = ['totalWeeklyIncome', 'totalHouseholdExpenses', 'totalOtherExpenses', 'totalExpenses', 'sessionStorage', 'lodash'];

  function confirmYourAnswers(totalWeeklyIncome, totalHouseholdExpenses, totalOtherExpenses, totalExpenses, sessionStorage, lodash) {
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

      vm.employmentStatus = lodash.get(vm, 'pleaApp.yourEmployment.employmentStatus');

      vm.totalWeeklyIncome = totalWeeklyIncome.calculate(vm);
      lodash.set(vm, 'confirmPlea.pleaApp.yourExpenses.household.totalHouseholdExpenses', totalHouseholdExpenses.calculate(vm));

      vm.totalOtherExpenses = totalOtherExpenses.calculate(vm);

      vm.otherSignificantExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpenses');

      if (vm.otherSignificantExpenses === 'No') {
        lodash.set(vm, 'pleaApp.yourExpenses.other.otherSignificantExpensesDetails', 'None');
      }

      if (vm.employmentStatus === 'Other') {
        vm.employmentStatus = lodash.get(vm, 'pleaApp.yourEmployment.provideDetails');
      }

      vm.totalExpenses = totalExpenses.calculate(vm);
    }
  }
})();
