(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('submitButton', {
      bindings: {
        buttonText: '@'
      },
      controller: SubmitButtonController,
      controllerAs: 'vm',
      templateUrl: 'app/components/form/submit-button/submit-button.tpl.html'
    });

  function SubmitButtonController() {
    
    var vm    = this;
    vm.submit = submit;

    function submit() {
      alert('here');
    }
  }

}());