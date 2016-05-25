(function() {

  'use strict';  

  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);

  YourDetailsController.$inject = ['sessionStorage', 'state'];

  function YourDetailsController(sessionStorage, state) {
    var vm = this;
    var BASE_NAME = 'pleaApp.yourDetails.';

    vm.buttonContinueLabel = 'Continue';
    vm.buttonContinue = buttonContinueClicked;
    vm.showCancelLink = showCancelLink;

    _updateViewModel();
    _updateContinueButtonLabel();

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();     
      _updateSessionStorage();
      _updateState();
    }
    
    function showCancelLink() {
      return state.getPrevious() === 'confirm-plea';
    }
    
    //private
    
    function _updateContinueButtonLabel() {
      vm.buttonContinueLabel = state.getPrevious() === 'confirm-plea' ? 'Change' : 'Continue';
    }
    
    function _updateState() {
      if (state.getPrevious() === 'confirm-plea') {
        state.goPrevious();
      } else {
        state.goNext();
      }
    }
    
    function _updateViewModel() {
      var get = sessionStorage.getGetter(BASE_NAME);
      
      vm.personalTitle = get('personalTitle');
      vm.firstName = get('firstName');
      vm.lastName = get('lastName');
      vm.addressStreet = get('address.street');
      vm.addressCity = get('address.city');
      vm.addressPostcode = get('address.postcode');
      
      vm.detailsCorrect = get('detailsCorrect');
      vm.update = get('update');
      vm.contactNumber = get('contactNumber');
      
      vm.dateOfBirthDay = get('dateOfBirthDay');
      vm.dateOfBirthMonth = get('dateOfBirthMonth');
      vm.dateOfBirthYear = get('dateOfBirthYear');
      
      vm.nationalInsurance = get('nationalInsurance');
      vm.nationalInsuranceNumber = get('nationalInsuranceNumber');
    }
    
    function _updateSessionStorage() {
      var set = sessionStorage.getSetter(BASE_NAME);
      
      set('', undefined);
      
      set('personalTitle', 'Mr');
      set('firstName', 'Mike');
      set('lastName', 'Mouse');
      set('address.street', '38A Baker Street');
      set('address.city', 'London');
      set('address.postcode', '007 700');
      set('detailsCorrect', vm.detailsCorrect);
      
      if (vm.detailsCorrect === 'No') {
        set('update', vm.update);
      }
      
      set('contactNumber', vm.contactNumber);
      set('dateOfBirthDay', vm.dateOfBirthDay);
      set('dateOfBirthMonth', vm.dateOfBirthMonth);
      set('dateOfBirthYear', vm.dateOfBirthYear);
      set('nationalInsurance', vm.nationalInsurance);
      
      if (vm.nationalInsurance === 'Yes') {
        set('nationalInsuranceNumber', vm.nationalInsuranceNumber);
      }
      
    }    
  }
})();