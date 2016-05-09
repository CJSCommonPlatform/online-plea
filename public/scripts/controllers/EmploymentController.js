(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmploymentController', EmploymentController);
    
  EmploymentController.$inject = ['$scope', '$state', '$stateParams', 'employmentStatus'];  
    
  function EmploymentController($scope, $state, $stateParams, employmentStatus) {
    
    $scope.employmentStatus = employmentStatus;
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
        
        switch ($scope.data.employment) {
          
          case employmentStatus.EMPLOYED:
            $state.go('employment-employed-finances');
            break;
            
          case employmentStatus.EMPLOYED_BENEFITS:
            $state.go('employment-employed-receiving-benefits-finances');
            break;
            
          case employmentStatus.SELF_EMPLOYED:
            $state.go('employment-self-employed-finances');
            break;
            
          case employmentStatus.SELF_EMPLOYED_BENEFITS:
            $state.go('employment-self-employed-receiving-benefits-finances');
            break;
          
          case employmentStatus.WORK_BENEFITS:
            $state.go('employment-work-benefits-finances');
            break;
            
          case employmentStatus.OTHER:
            $state.go('employment-other-finances');
            break;
        
        }
      
    };

  }  
  
})();