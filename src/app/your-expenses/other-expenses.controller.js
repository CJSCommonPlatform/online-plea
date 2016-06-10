(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['state', 'sessionStorage', 'otherExpenses', 'formValidation', 'decimalLimit', '$stateParams'];
    
  function OtherExpensesController(state, sessionStorage, otherExpenses, formValidation, decimalLimit, $stateParams) {
    var vm = this;

    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.decimalLimit = decimalLimit;

    otherExpenses.updateVm(vm);

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      otherExpenses.updateSessionStorage(vm);
      if (!vm.form.invalid) {
        state.go(getNextState());
      }
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
    
  }

})();