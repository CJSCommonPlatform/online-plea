(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourPleaHasBeenSubmitted', yourPleaHasBeenSubmitted);

  yourPleaHasBeenSubmitted.$inject = ['sessionStorage'];

  function yourPleaHasBeenSubmitted(sessionStorage) {
    var BASE_NAME = '';

    var service = {
      updateVm: updateVm
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);

      vm.pleaApp = get('pleaApp');
    }
  }
})();
