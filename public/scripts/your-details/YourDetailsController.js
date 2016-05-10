(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);
    
  YourDetailsController.$inject = ['$scope', '$state', 'PleaData'];

  function YourDetailsController($scope, $state, PleaData) {

	$scope.data = PleaData.data;

	$scope.buttonContinue = function(event) {
		event.preventDefault();
		$state.go('your-plea');
	};

  }

})();