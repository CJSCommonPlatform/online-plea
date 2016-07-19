(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourDetails', yourDetails);

  yourDetails.$inject = ['sessionStorage'];

  function yourDetails(sessionStorage) {
    var defaults = {
      detailsCorrect: {},
      nationalInsuranceNumber: {}
    }

    return sessionStorage.createSubstorage('pleaApp.personalDetails', defaults);
  }
})();
