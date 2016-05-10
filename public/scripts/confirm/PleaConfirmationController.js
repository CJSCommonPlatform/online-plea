(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaConfirmationController', PleaConfirmationController);
    
  PleaConfirmationController.$inject = ['$scope', '$state'];  
    
  function PleaConfirmationController($scope, $state) {
    
	$scope.data = PleaData.data;

	$scope.buttonContinue = function(event) {
		event.preventDefault();
		$state.go('index');
	};

  }  
  
})();