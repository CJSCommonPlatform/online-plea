(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ForwardController', ForwardController);
    
  function ForwardController($scope, $state, $controller, PleaData, yesNoAnswer) {
    //var vm = this;

    angular.extend(this, $controller('FlowController', {$scope: $scope}));

    $scope.data = PleaData.data;

    $scope.yesNoAnswer = yesNoAnswer;
    
    var nextState = $scope.getNextState($state);
    $state.go(nextState);
  }  
  
})();