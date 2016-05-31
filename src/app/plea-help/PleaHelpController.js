(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaHelpController', PleaHelpController);
    
  PleaHelpController.$inject = ['$state'];  
    
  function PleaHelpController($state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      $state.go('index');
    }
  }

})();