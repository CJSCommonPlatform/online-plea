(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);
    
  YourPleaController.$inject = ['$scope', '$state', 'PleaData'];

  function YourPleaController($scope, $state, PleaData) {
  	$scope.data = PleaData.data;

    $scope.backLink = function() {
      backLink.back();
    };

    $scope.buttonContinue = function(event) {
      event.preventDefault();

      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }

})();