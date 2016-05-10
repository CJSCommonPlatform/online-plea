(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('BenefitsController', BenefitsController);
    
  BenefitsController.$inject = ['$scope', '$state', '$stateParams', '$sessionStorage', 'yesNoAnswer', '$controller'];  
    
  function BenefitsController($scope, $state, $stateParams, $sessionStorage, yesNoAnswer, $controller) {

    angular.extend(this, $controller('Forward2Controller', {$scope: $scope}));
    
    $scope.yesNoAnswer = yesNoAnswer;

    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      $scope.financialProblems = $sessionStorage.financialProblems;
      
      $scope.stateGo($stateParams.goToStates3);
    };

  }  
  
})();