(function() {

  'use strict';  

  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);

  YourDetailsController.$inject = ['yourDetails', 'state'];

  function YourDetailsController(yourDetails, state) {
    var vm = this;

    vm.buttonContinueLabel = 'Continue';
    vm.buttonContinue = buttonContinueClicked;
    vm.showCancelLink = showCancelLink;

    yourDetails.updateVm(vm);
    _updateContinueButtonLabel();

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();     
      yourDetails.updateSessionStorage(vm);
      _updateState();
    }
    
    function showCancelLink() {
      return state.getPrevious() === 'confirm-your-answers';
    }
    
    //private
    
    function _updateContinueButtonLabel() {
      vm.buttonContinueLabel = state.getPrevious() === 'confirm-your-answers' ? 'Change' : 'Save and continue';
    }
    
    function _updateState() {
      if (state.getPrevious() === 'confirm-your-answers') {
        state.goPrevious();
      } else {
        state.goNext();
      }
    }
  }
})();