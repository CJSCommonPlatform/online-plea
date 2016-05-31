(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmPleaController', ConfirmPleaController);
    
  ConfirmPleaController.$inject = ['totalWeeklyIncome', 'totalHouseholdExpenses', 'totalOtherExpenses', 'totalExpenses', 'sessionStorage', 'state', 'lodash'];
    
  function ConfirmPleaController(totalWeeklyIncome, totalHouseholdExpenses, totalOtherExpenses, totalExpenses, sessionStorage, state, lodash) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;
    
    _updateViewModel();

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext();
    }
    
    function _updateViewModel() {
      var get = sessionStorage.getGetter('');
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

      vm.otherExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.otherExpenses');
      
      if (vm.otherExpenses === 'Yes') {
        vm.otherExpenses = lodash.get(vm, 'pleaApp.yourExpenses.other.otherExpensesDetails');
      }
      
      if (vm.employmentStatus === 'Other') {
        vm.employmentStatus = lodash.get(vm, 'pleaApp.yourEmployment.provideDetails');
      }
      
      vm.totalExpenses = totalExpenses.calculate(vm);
    }

  }

})();