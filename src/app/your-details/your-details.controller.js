(function() {

  'use strict';  

  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);

  YourDetailsController.$inject = ['yourDetails', 'state', '$stateParams'];

  function YourDetailsController(yourDetails, state, $stateParams) {
    var vm = this;

    vm.buttonContinueLabel = angular.isDefined($stateParams.nextState) ? 'Change and continue' : 'Save and continue';
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;

    yourDetails.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();     
      yourDetails.updateSessionStorage(vm);
      state.go(getNextState());
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext();
    }
  }
})();