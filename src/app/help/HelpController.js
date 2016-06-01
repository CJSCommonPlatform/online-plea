(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HelpController', HelpController);
    
  HelpController.$inject = ['$state'];
    
  function HelpController($state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      $state.go('index');
    }
  }

})();