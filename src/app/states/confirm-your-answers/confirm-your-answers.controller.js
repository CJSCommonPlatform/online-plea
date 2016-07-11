(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmYourAnswersController', ConfirmYourAnswersController);
    
  ConfirmYourAnswersController.$inject = ['confirmYourAnswers', 'state', '$state', '$filter'];
    
  function ConfirmYourAnswersController(confirmYourAnswers, state, $state, $filter) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;
    vm.goToSelection = goToSelection;
    
    confirmYourAnswers.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext();
    }

    function goToSelection () {
      var url = $filter('replaceSpaces')(vm.pleaApp.yourEmployment.employmentStatus);
      if(vm.pleaApp.yourEmployment.employmentStatus.indexOf('benefits') === -1) {
        $state.go("your-employment." + url + ".finances");
      } else {
        $state.go("your-benefits");
      }
    }
  }
})();