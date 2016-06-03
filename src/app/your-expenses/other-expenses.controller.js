(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['state', 'sessionStorage', 'otherExpenses', '$stateParams'];
    
  function OtherExpensesController(state, sessionStorage, otherExpenses, $stateParams) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;
    vm.nextState = $stateParams.nextState;

    otherExpenses.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      otherExpenses.updateSessionStorage(vm);
      state.go(getNextState());
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
    
  }

})();