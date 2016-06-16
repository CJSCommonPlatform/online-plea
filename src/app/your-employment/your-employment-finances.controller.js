(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourEmploymentFinancesController', YourEmploymentFinancesController);

  YourEmploymentFinancesController.$inject = ['yesNoAnswer', 'yourEmploymentFinances', 'state', '$stateParams', 'formValidation', 'decimalLimit'];

  function YourEmploymentFinancesController(yesNoAnswer, yourEmploymentFinances, state, $stateParams, formValidation, decimalLimit) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.decimalLimit = decimalLimit;
    vm.scrollToAnchor = state.scrollToAnchor;

    yourEmploymentFinances.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      
      if (!vm.form.invalid) {
        yourEmploymentFinances.updateSessionStorage(vm);
        state.go(getNextState());
      }      
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }

  }
  
})();