(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);
    
  YourPleaController.$inject = ['$scope', '$state', 'PleaData', 'backLink'];

  function YourPleaController($scope, $state, PleaData, backLink) {
  	$scope.data = PleaData.data;

    $scope.backLink = backLink.back;

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