(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);

  YourPleaController.$inject = ['pleas', 'yesNoAnswer', 'yourPlea', 'state', '$stateParams', 'formValidation'];

  function YourPleaController(pleas, yesNoAnswer, yourPlea, state, $stateParams, formValidation) {
    var vm = this;

    vm.pleas = pleas;
    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.scrollToAnchor = state.scrollToAnchor;

    yourPlea.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        var hasPleaChanged = yourPlea.updateSessionStorage(vm);
        updateState(hasPleaChanged);
      }
    }

    function updateState(hasPleaChanged) {
      if (hasPleaChanged) {
        state.goNext(vm);
      } else if (angular.isDefined($stateParams.nextState)) {
        state.go($stateParams.nextState);
      } else {
        state.goNext(vm);
      }
    }
  }
})();