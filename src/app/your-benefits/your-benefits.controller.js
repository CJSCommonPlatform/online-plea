(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourBenefitsController', YourBenefitsController);

  YourBenefitsController.$inject = ['yesNoAnswer', 'yourBenefits', 'state', '$stateParams', 'formValidation', 'decimalLimit'];

  function YourBenefitsController(yesNoAnswer, yourBenefits, state, $stateParams, formValidation, decimalLimit) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.decimalLimit = decimalLimit;

    yourBenefits.updateVm(vm);

    // public

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        var hasFinancialProblemsChanged = yourBenefits.updateSessionStorage(vm);
        return updateState(hasFinancialProblemsChanged);
      }
    }

    //private

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