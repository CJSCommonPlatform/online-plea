(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('submitButton', {
      bindings: {
        buttonText: '@',
        form: '=',
        state: '@'
      },
      controller: SubmitButtonController,
      controllerAs: 'vm',
      templateUrl: 'app/components/form/submit-button/submit-button.tpl.html'
    });

  SubmitButtonController.$inject = ['$state', 'formValidation'];

  function SubmitButtonController($state, formValidation) {
    
    var vm    = this;
    vm.submit = submit;

    function submit() {

      formValidation.validate(vm.form);
      
      if(!vm.form.invalid) {
        //storageService.updateSessionStorage(vm);
        return vm.hasOwnProperty('state') ? $state.go(vm.state) : 'false';
      }
    }
  }

}());