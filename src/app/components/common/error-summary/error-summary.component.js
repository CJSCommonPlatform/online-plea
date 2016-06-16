(function () {
  'use strict';

  angular
    .module('pleaApp')
    .component('errorSummary', {
      templateUrl: 'app/components/common/error-summary/error-summary.html',
      controller: ErrorSummaryController,
      controllerAs: 'vm',
      bindings: {
        form: '<',
        fields: '<'
      }
    });


  /* @ngInject */
  function ErrorSummaryController (lodash) {
    var vm = this;

    vm.invalidFields = function () {
      return lodash.reject(vm.fields, function (field) {
        return lodash.isEmpty(vm.form[field.name].$error);
      });
    };
  }
})();
