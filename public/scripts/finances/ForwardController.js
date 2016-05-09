(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ForwardController', ForwardController);
    
  function ForwardController($scope, $state, $stateParams) {
    //var vm = this;
    
    $scope.buttonContinue = buttonContinue;
    
    function buttonContinue(event) {
      event.preventDefault();
      $state.go($stateParams.forwardTo);
    };
  }  
  
})();