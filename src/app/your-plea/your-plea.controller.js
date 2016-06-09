(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);

  YourPleaController.$inject = ['pleas', 'yesNoAnswer', 'yourPlea', 'state', 'formValidation', '$stateParams'];

  function YourPleaController(pleas, yesNoAnswer, yourPlea, state, formValidation, $stateParams) {
    var vm = this;

    vm.pleas = pleas;
    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;

    yourPlea.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      var hasPleaChanged = yourPlea.updateSessionStorage(vm);
      if (!vm.form.invalid) {
        //return updateState(hasPleaChanged);
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