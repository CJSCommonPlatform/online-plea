(function() {
  
  'use strict';  
    
  angular
    .module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['state', 'sessionStorage', 'householdExpenses', 'formValidation', '$stateParams'];
    
  function HouseholdExpensesController(state, $sessionStorage, householdExpenses, formValidation, $stateParams) {
    var vm = this;

    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;

    householdExpenses.updateVm(vm);

    //public
    
    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      householdExpenses.updateSessionStorage(vm);
      if (!vm.form.invalid) {
        state.go(getNextState());
      }
    }
    

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
    
  }

})();