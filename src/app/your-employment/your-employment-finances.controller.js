(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourEmploymentFinancesController', YourEmploymentFinancesController);

  YourEmploymentFinancesController.$inject = ['yesNoAnswer', 'yourEmploymentFinances', 'state'];

  function YourEmploymentFinancesController(yesNoAnswer, yourEmploymentFinances, state) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    yourEmploymentFinances.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      yourEmploymentFinances.updateSessionStorage(vm);

      console.log('!!!!' + vm.financialProblems);

      state.goNext(vm);
    }
  }
})();