(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['$scope', '$state', '$stateParams', 'employmentStatus', '$controller'];  
    
  function EmploymentController($scope, $state, $stateParams, employmentStatus, $controller) {
    angular.extend(this, $controller('Forward2Controller', {$scope: $scope}));
    
    $scope.employmentStatus = employmentStatus;
    
    $scope.buttonContinue = function(event) {
      event.preventDefault();
      $scope.stateGo($stateParams.goToStates);
    };

  }
  
})();