(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ExpensesController', ExpensesController);
  
  ExpensesController.$inject = ['state', 'expenses', 'yesNoAnswer'];

  function ExpensesController(state, expenses, yesNoAnswer) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;

    expenses.updateVm(vm);
    state.goNext(vm);
  }
})();