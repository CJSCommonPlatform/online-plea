(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['state', 'sessionStorage', 'otherExpenses'];
    
  function OtherExpensesController(state, sessionStorage, otherExpenses) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    otherExpenses.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      otherExpenses.updateSessionStorage(vm);
      state.goNext(vm);
    }
    
  }

})();