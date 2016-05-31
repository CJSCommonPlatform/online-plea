(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['state', 'sessionStorage', 'otherExpenses', 'lodash'];
    
  function OtherExpensesController(state, sessionStorage, otherExpenses, lodash) {
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