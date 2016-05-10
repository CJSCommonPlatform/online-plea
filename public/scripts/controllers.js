// ==========================================================================
// Controllers
// ==========================================================================


pleaApp.controller('mainController', function($scope, $state, backLink) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    backLink.back();
    $state.go('your-case');
  };

});


pleaApp.controller('yourDetailsController', function($scope, $state, PleaData, backLink) {
  
  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('your-plea');
  };

});


pleaApp.controller('yourPleaController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('your-employment');
  };

});


pleaApp.controller('yourEmploymentController', function($scope, $state, PleaData, backLink, employmentStatus) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };
  
  $scope.employmentStatus = employmentStatus;

  $scope.buttonContinue = function(event) { 
       
    event.preventDefault();
      
      switch ($scope.data.employment) {
        
        case employmentStatus.EMPLOYED:
          $state.go('your-finances/employed');
          break;
          
        case employmentStatus.EMPLOYED_BENEFITS:
          $state.go('your-finances/employed-receiving-benefits');
          break;
          
        case employmentStatus.SELF_EMPLOYED:
          $state.go('your-finances/self-employed');
          break;
          
        case employmentStatus.SELF_EMPLOYED_BENEFITS:
          $state.go('your-finances/self-employed-receiving-benefits');
          break;
        
        case employmentStatus.WORK_BENEFITS:
          $state.go('your-finances/work-benefits');
          break;
          
        case employmentStatus.OTHER:
          $state.go('your-finances/other');
          break;
      
      }
    
  };

});


pleaApp.controller('yourFinancesController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    
    event.preventDefault();
    
    
    // If financial problems, goto expenses route
    
    if($scope.data.financialProblems === 'Yes') {
      
      $state.go('your-expenses');
      
    } else {
      
      $state.go('confirm-plea');
      
    }
    
  };

});


pleaApp.controller('yourExpensesController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('/your-expenses/other');
  };

});


pleaApp.controller('otherExpensesController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('confirm-plea');
  };

});


pleaApp.controller('confirmationController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('/');
  };

});


pleaApp.controller('pleaHelpController', function($scope, $state, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $state.go('/');
  };

});

