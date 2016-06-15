(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);

  YourCaseController.$inject = ['yourCaseStorage', 'state', '$stateParams', 'formValidation'];

  function YourCaseController(yourCaseStorage, state, $stateParams, formValidation) {

    var vm = this;

    vm.continueButtonClicked = continueButtonClicked;
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;
    vm.scrollToAnchor = state.scrollToAnchor;

    yourCaseStorage.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        yourCaseStorage.updateSessionStorage(vm);
        state.go(getNextState(vm));
      }
    }

    function getNextState(vm) {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
  }

})();