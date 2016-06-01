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
      vm.totalHouseholdExpenses = totalHouseholdExpenses.calculate(vm);
      vm.totalOtherExpenses = totalOtherExpenses.calculate(vm);

      vm.otherSignificantExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpenses');

      if (vm.otherSignificantExpenses === 'Yes') {
        vm.otherSignificantExpensesDetails = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpensesDetails');
        vm.otherSignificantExpensesTotal = lodash.get(vm, 'pleaApp.yourExpenses.other.otherSignificantExpensesTotal');
      } else {
        vm.otherSignificantExpensesDetails = 'No';
      }

      if (vm.employmentStatus === 'Other') {
        vm.employmentStatus = lodash.get(vm, 'pleaApp.yourEmployment.provideDetails');
      }

      vm.totalExpenses = totalExpenses.calculate(vm);
    }
  }
})();
