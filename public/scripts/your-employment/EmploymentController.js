(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['$scope', '$state', '$stateParams', 'employmentStatus', '$controller', 'backLink'];  
    
  function EmploymentController($scope, $state, $stateParams, employmentStatus, $controller, backLink) {
    angular.extend(this, $controller('FlowController', {$scope: $scope}));
    
    $scope.employmentStatus = employmentStatus;

    $scope.backLink = backLink.back;
    
    $scope.buttonContinue = function(event) {
      event.preventDefault();

      var nextState = $scope.getNextState($state);
      $state.go(nextState);
    };

  }
  
})();