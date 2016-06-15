(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['employmentStatus', 'yourEmploymentStorage', 'state', '$stateParams', 'formValidation'];
    
  function EmploymentController(employmentStatus, yourEmploymentStorage, state, $stateParams, formValidation) {
    var vm = this;

    vm.employmentStatus = employmentStatus;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;

    yourEmploymentStorage.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        yourEmploymentStorage.updateSessionStorage(vm);
        state.goNext(vm);
      }
    }

  }

})();