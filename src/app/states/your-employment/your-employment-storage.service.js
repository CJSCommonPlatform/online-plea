(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourEmploymentStorage', yourEmploymentStorage);

  yourEmploymentStorage.$inject = ['sessionStorage', 'employmentStatus'];

  function yourEmploymentStorage(sessionStorage, employmentStatus) {
    var BASE_NAME = 'pleaApp.yourEmployment.';

    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
      vm.employment = get('employmentStatus');
      vm.provideDetails = get('provideDetails');
    }

    function updateSessionStorage(vm) {
      var employment = get('employmentStatus');

      if (employment !== vm.employment) {
        set('', undefined);
        sessionStorage.reset('pleaApp.yourExpenses.');
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
			  