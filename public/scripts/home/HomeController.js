(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HomeController', HomeController);
    
  HomeController.$inject = ['$scope', '$state'];  
    
  function HomeController($scope, $state, $controller) {
    
  	$scope.buttonContinue = function(event) {
      event.preventDefault();

      var nextState = $state.current.data.nextState;
      $state.go(nextState);
  	};
  }
})();