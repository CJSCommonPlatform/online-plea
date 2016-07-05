(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('submitButton', {
      bindings: {
        buttonText: '@',
        formStorageService: '@',
        form: '=',
        state: '@'
      },
      controller: SubmitButtonController,
      controllerAs: 'vm',
      templateUrl: 'app/components/form/submit-button/submit-button.tpl.html'
    });

  SubmitButtonController.$inject = ['$state', '$injector', 'formValidation'];

  function SubmitButtonController($state, $injector, formValidation) {
    
    var vm      = this;
    var service = $injector.get(vm.formStorageService);
    vm.submit   = submit;

    function submit() {

      formValidation.validate(vm.form);
      
      if(!vm.form.invalid) {
        service.updateSessionStorage(vm.form);
        return vm.hasOwnProperty('state') ? $state.go(vm.state) : 'false';
      }
    }
  }

}());