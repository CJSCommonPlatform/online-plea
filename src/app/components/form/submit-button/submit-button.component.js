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
      template: '{{vm.buttonText}}'
      // template: '<div class="form-group">'+
      //   					'<button class="button" type="submit"' +
      //     								'data-ng-click="vm.submit()"' +
						// 		          'data-focus-event="click"' +
						// 		          'data-focus-target="error-summary"' +
						// 		          'data-focus>'vm.buttonText +
      //   					'</button>'+
      // 					'</div>'
    });

  function SubmitButtonController() {
    
    var vm    = this;
    console.log(vm);
    vm.submit = submit;

    function submit() {
    	alert('here');
    }
  }

}());