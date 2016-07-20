(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourCaseStorage', yourCaseStorage);

  yourCaseStorage.$inject = ['sessionStorage'];

  function yourCaseStorage(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourDetails.';

    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      vm.caseUniqueReferenceNumber = get('caseUniqueReferenceNumber');
      vm.casePostcode = get('casePostcode');
    }

    function updateSessionStorage(data) {
      var dob = moment(data.defendant.dateOfBirth);

      sessionStorage.getSetter('pleaApp.yourCase.')('caseId', data.caseId);

      set('firstName', data.defendant.firstName);
      set('lastName', data.defendant.lastName);
      set('dateOfBirthDay', dob.date());
      set('dateOfBirthMonth', dob.month() + 1);
      set('dateOfBirthYear', dob.year());
      set('address.street', data.defendant.address.addressLine1);
      set('address.city', data.defendant.address.addressLine2);
      set('address.postcode', data.defendant.address.postCode.toUpperCase());

      sessionStorage.getSetter('pleaApp.yourCase.')('defendantId', data.defendant.id);
      sessionStorage.getSetter('pleaApp.yourCase.')('offence.id', data.defendant.offences[0].id);
      sessionStorage.getSetter('pleaApp.yourPlea.')('offence.wording', data.defendant.offences[0].wording);
    }

  }

})();
