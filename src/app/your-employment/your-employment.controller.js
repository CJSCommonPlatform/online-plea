(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['employmentStatus', 'sessionStorage', 'state'];  
    
  function EmploymentController(employmentStatus, sessionStorage, state) {
    var vm = this;
    
    var BASE_NAME = 'pleaApp.yourEmployment.';
    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME); 

    vm.employmentStatus = employmentStatus;
    vm.buttonContinue = buttonContinueClicked;

    _updateViewModel();

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();
      _updateSessionStorage();
      state.goNext(vm);
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