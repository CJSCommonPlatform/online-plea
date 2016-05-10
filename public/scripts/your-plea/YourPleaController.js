(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);
    
  YourPleaController.$inject = ['$scope', '$state', 'PleaData', '$controller'];

  function YourPleaController($scope, $state, PleaData, $controller) {
    angular.extend(this, $controller('ForwardController', {$scope: $scope}));

  	$scope.data = PleaData.data;

    $scope.backLink = function() {
      backLink.back();
    };

    $scope.buttonContinue = function(event) {
      event.preventDefault();
      $state.go($scope.getGoToState());
    };

  }

})();