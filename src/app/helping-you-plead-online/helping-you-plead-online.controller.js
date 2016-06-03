(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HelpingYouPleadOnlineController', HelpingYouPleadOnlineController);
    
  HelpingYouPleaOnlineController.$inject = ['state'];
    
  function HelpingYouPleadOnlineController(state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext(vm);
    }
  }
})();