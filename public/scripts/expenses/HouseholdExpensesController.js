(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$scope', '$state', '$stateParams', '$controller', 'backLink'];  
    
  function HouseholdExpensesController($scope, $state, $stateParams, $controller, backLink) {
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) {        
      event.preventDefault();
      var nextState = $state.current.data.nextState;
      $state.go($state.current.data.nextState);
    };
  }  
})();