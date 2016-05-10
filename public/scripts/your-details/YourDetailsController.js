(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);
    
  YourDetailsController.$inject = ['$scope', '$state', 'PleaData', '$controller'];

  function YourDetailsController($scope, $state, PleaData, $controller) {
    angular.extend(this, $controller('ForwardController', {$scope: $scope}));

  	$scope.data = PleaData.data;

  	$scope.buttonContinue = function(event) {
  		event.preventDefault();
  		$state.go($scope.getGoToState());
  	};
  }

})();