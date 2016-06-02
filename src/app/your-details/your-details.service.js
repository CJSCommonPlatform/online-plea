(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourDetails', yourDetails);

  yourDetails.$inject = ['sessionStorage'];

  function yourDetails(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourDetails.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
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
      vm.emailAddress = get('emailAddress');

      vm.dateOfBirthDay = get('dateOfBirthDay');
      vm.dateOfBirthMonth = get('dateOfBirthMonth');
      vm.dateOfBirthYear = get('dateOfBirthYear');

      vm.nationalInsurance = get('nationalInsurance');
      vm.nationalInsuranceNumber = get('nationalInsuranceNumber');
    }

    function updateSessionStorage(vm) {
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
