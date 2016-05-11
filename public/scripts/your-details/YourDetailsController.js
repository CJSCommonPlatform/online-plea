(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);
    
  YourDetailsController.$inject = ['$scope', '$state', 'PleaData', 'backLink'];

  function YourDetailsController($scope, $state, PleaData, backLink) {
  	$scope.data = PleaData.data;

    $scope.backLink = backLink.back;

  	$scope.buttonContinue = function(event) {
  		event.preventDefault();

      var nextState = $state.current.data.nextState;
  		$state.go(nextState);
  	};
  }
})();