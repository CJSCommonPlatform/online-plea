(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ForwardController', ForwardController);
    
  function ForwardController($scope, $state, $controller) {
    //var vm = this;

    angular.extend(this, $controller('FlowController', {$scope: $scope}));
    
    var nextState = $scope.getNextState($state);
    $state.go(nextState);
  }  
  
})();