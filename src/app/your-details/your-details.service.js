(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourDetails', yourDetails);

  yourDetails.$inject = ['yourDetailsRetrieve', 'sessionStorage'];

  function yourDetails(yourDetailsRetrieve, sessionStorage) {
    var BASE_NAME = 'pleaApp.yourDetails.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);
      
      if (get('') === undefined) {
        
        var retrieved = yourDetailsRetrieve.retrieve();
        
        vm['title'] = retrieved['title'];
        vm.firstName = retrieved.firstName;
        vm.lastName = retrieved.lastName;
        vm.addressStreet = retrieved.address.street;
        vm.addressCity = retrieved.address.city;
        vm.addressPostcode = retrieved.address.postcode;
        
      } else {

        vm['title'] = get('title');
        vm.firstName = get('firstName');
        vm.lastName = get('lastName');
        vm.addressStreet = get('address.street');
        vm.addressCity = get('address.city');
        vm.addressPostcode = get('address.postcode');
  
        vm.detailsCorrect = get('detailsCorrect');
        vm.yourUpdateDetails = get('yourUpdateDetails');
        vm.contactNumber = get('contactNumber');
        vm.emailAddress = get('emailAddress');
  
        vm.dateOfBirthDay = get('dateOfBirthDay');
        vm.dateOfBirthMonth = get('dateOfBirthMonth');
        vm.dateOfBirthYear = get('dateOfBirthYear');
  
        vm.nationalInsurance = get('nationalInsurance');
        vm.nationalInsuranceNumber = get('nationalInsuranceNumber');
      }
      
    }

    function updateSessionStorage(vm) {
      var set = sessionStorage.getSetter(BASE_NAME);

      set('', undefined);

      set('title', vm['title']);
      set('firstName', vm.firstName);
      set('lastName', vm.lastName);
      set('address.street', vm.addressStreet);
      set('address.city', vm.addressCity);
      set('address.postcode', vm.addressPostcode);
      set('detailsCorrect', vm.detailsCorrect);

      if (vm.detailsCorrect === 'No') {
        set('yourUpdateDetails', vm.yourUpdateDetails);
      }

      set('contactNumber', vm.contactNumber);
      set('emailAddress', vm.emailAddress);
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