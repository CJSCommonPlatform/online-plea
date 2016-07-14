(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('expenses', expenses);

  expenses.$inject = ['sessionStorage'];

  function expenses(sessionStorage) {
    var BASE_NAME = 'pleaApp.yourEmployment.';

    var service = {
      updateVm: updateVm
    };

    return service;

    function updateVm(vm) {
      var get = sessionStorage.getGetter(BASE_NAME);
      vm.financialProblems = get('financialProblems');
    }
  }
})();
