(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourEmploymentFinancesController', YourEmploymentFinancesController);

  YourEmploymentFinancesController.$inject = ['yesNoAnswer', 'yourEmploymentFinances', 'state', '$stateParams', 'formValidation', 'decimalLimit', 'sessionStorage'];

  function YourEmploymentFinancesController(yesNoAnswer, yourEmploymentFinances, state, $stateParams, formValidation, decimalLimit, sessionStorage) {
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

      var get = sessionStorage.getGetter('pleaApp.yourExpenses.');
      if(!get('household') || !get('other')) {
        return state.getNext(vm);
      } else {
        return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
      }
      
    }

  }
  
})();