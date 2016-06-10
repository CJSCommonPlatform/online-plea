(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['employmentStatus', 'sessionStorage', 'state', '$stateParams', 'formValidation'];
    
  function EmploymentController(employmentStatus, sessionStorage, state, $stateParams, formValidation) {
    var vm = this;
    
    var BASE_NAME = 'pleaApp.yourEmployment.';
    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME); 

    vm.employmentStatus = employmentStatus;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;

    _updateViewModel();

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        _updateSessionStorage();
        var nextState = state.getNext(vm);
        state.go(nextState, {nextState: vm.nextState});
      }
    }
  
    //private

    function _updateViewModel() {
      vm.employment = get('employmentStatus');
      vm.provideDetails = get('provideDetails');
    }
    
    function _updateSessionStorage() {
      var employment = get('employmentStatus');

      if (employment !== vm.employment) {
        set('', undefined);
      }
      
      set('employmentStatus', vm.employment);
      
      if (vm.employment === employmentStatus.OTHER) {
        set('provideDetails', vm.provideDetails); 
      }

      if (vm.employment === employmentStatus.EMPLOYED
          || vm.employment === employmentStatus.SELF_EMPLOYED
          || vm.employment === employmentStatus.OTHER) {
        
        var resetBenefits = sessionStorage.getSetter('pleaApp.yourBenefits.');
        resetBenefits('', undefined);
      }
    } 
  }
})();