(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourCaseStorage', yourCaseStorage);

  yourCaseStorage.$inject = ['sessionStorage'];

  function yourCaseStorage(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourCase.';

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

    function updateSessionStorage(vm) {
      alert('here');
      set('caseUniqueReferenceNumber', vm.caseUniqueReferenceNumber);
      set('casePostcode', vm.casePostcode.toUpperCase());
    }

  }

})();