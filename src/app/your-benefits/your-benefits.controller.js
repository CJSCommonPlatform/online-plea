(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourBenefitsController', YourBenefitsController);

  YourBenefitsController.$inject = ['yesNoAnswer', 'yourBenefits', 'state', '$stateParams'];

  function YourBenefitsController(yesNoAnswer, yourBenefits, state, $stateParams) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;
    vm.nextState = $stateParams.nextState;

    yourBenefits.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      var hasFinancialProblemsChanged = yourBenefits.updateSessionStorage(vm);
      return updateState(hasFinancialProblemsChanged);
    }

    function updateState(hasFinancialProblemsChanged) {
      if (hasFinancialProblemsChanged) {
        state.goNext(vm);
      } else if (angular.isDefined($stateParams.nextState)) {
        state.go($stateParams.nextState);
      } else {
        state.goNext(vm);
      }
    }

  }
})();