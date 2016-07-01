(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('buttonContinue', {
    	bindings: {
    		state: '@'
    	},
      controller: ButtonContinueController,
      controllerAs: 'vm',
      template: '<p>'+
                  '<a class="button button-start" href="" role="button" data-ng-click="vm.buttonContinue()">Start now</a>'+
                '</p>'
    });

  function ButtonContinueController($state) {
    
    var vm = this;
    vm.buttonContinue = buttonContinue;

    function buttonContinue() {
    	return vm.hasOwnProperty('state') ? $state.go(vm.state) : 'false';
    }
  }

}());