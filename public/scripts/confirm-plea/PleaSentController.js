(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaSentController', PleaSentController);
    
  PleaSentController.$inject = ['$scope', '$state', 'PleaData'];  
    
  function PleaSentController($scope, $state, PleaData) {
    
	$scope.data = PleaData.data;

  	$scope.buttonContinue = function(event) {
  		event.preventDefault();

      var nextState = $state.current.data.nextState;
  		$state.go(nextState);
  	};
  }  
})();