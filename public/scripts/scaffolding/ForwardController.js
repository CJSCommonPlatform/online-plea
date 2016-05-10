(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ForwardController', ForwardController);
    
  function ForwardController($scope, $state, $stateParams) {
    //var vm = this;

    $scope.getGoToState = getGoToState;

    function getGoToState() {
      return $stateParams.forwardTo;
    }
  }  
  
})();