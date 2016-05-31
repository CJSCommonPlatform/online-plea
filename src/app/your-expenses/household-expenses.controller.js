(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['state', 'sessionStorage', 'householdExpenses'];
    
  function HouseholdExpensesController(state, $sessionStorage, householdExpenses) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    householdExpenses.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      householdExpenses.updateSessionStorage(vm);
      state.goNext(vm);
    }
    
  }

})();