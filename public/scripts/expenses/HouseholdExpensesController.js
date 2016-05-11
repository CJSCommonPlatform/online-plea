(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$scope', '$state', '$stateParams', '$controller'];  
    
  function HouseholdExpensesController($scope, $state, $stateParams, $controller) {
    
    $scope.buttonContinue = function(event) {        
      event.preventDefault();
      var nextState = $state.current.data.nextState;
      $state.go($state.current.data.nextState);
    };
  }  
})();