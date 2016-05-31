(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);

  YourPleaController.$inject = ['pleas', 'yesNoAnswer', 'yourPlea', 'state'];

  function YourPleaController(pleas, yesNoAnswer, yourPlea, state) {
    var vm = this;

    vm.pleas = pleas;
    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;

    yourPlea.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      yourPlea.updateSessionStorage(vm);
      state.goNext(vm);
    }
  }
})();