(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HelpingYouPleaOnlineController', HelpingYouPleaOnlineController);
    
  HelpingYouPleaOnlineController.$inject = ['state'];
    
  function HelpingYouPleaOnlineController(state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext(vm);
    }
  }
})();