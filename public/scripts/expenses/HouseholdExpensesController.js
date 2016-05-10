(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$scope', '$state', '$stateParams', '$controller'];  
    
  function HouseholdExpensesController($scope, $state, $stateParams, $controller) {
    angular.extend(this, $controller('ForwardController', {$scope: $scope}));
    
    $scope.buttonContinue = function(event) {        
      event.preventDefault();
      $state.go($scope.getGoToState());
    };
  }  
})();