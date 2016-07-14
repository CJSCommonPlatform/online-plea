(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourPleaHasBeenSubmittedController', YourPleaHasBeenSubmittedController);
    
  YourPleaHasBeenSubmittedController.$inject = ['yourPleaHasBeenSubmitted', 'state'];
    
  function YourPleaHasBeenSubmittedController(yourPleaHasBeenSubmitted, state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    yourPleaHasBeenSubmitted.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext(vm);
    }
  }

})();