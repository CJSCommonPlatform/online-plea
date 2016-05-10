(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('IndexController', IndexController);
    
  IndexController.$inject = ['$scope', '$state', '$controller'];  
    
  function IndexController($scope, $state, $controller) {
    angular.extend(this, $controller('ForwardController', {$scope: $scope}));
    
  	$scope.buttonContinue = function(event) {
      event.preventDefault();

      $state.go($scope.getGoToState());
  	};
  }

})();