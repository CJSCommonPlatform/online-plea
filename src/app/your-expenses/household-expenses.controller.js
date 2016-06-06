(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['state', 'sessionStorage', 'householdExpenses', '$stateParams'];
    
  function HouseholdExpensesController(state, $sessionStorage, householdExpenses, $stateParams) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;
    vm.nextState = $stateParams.nextState;

    householdExpenses.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      householdExpenses.updateSessionStorage(vm);
      state.go(getNextState());
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
    
  }

})();