(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourBenefitsController', YourBenefitsController);

  YourBenefitsController.$inject = ['yesNoAnswer', 'yourBenefits', 'state'];

  function YourBenefitsController(yesNoAnswer, yourBenefits, state) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    yourBenefits.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      yourBenefits.updateSessionStorage(vm);
      state.goNext(vm);
    }
  }
})();