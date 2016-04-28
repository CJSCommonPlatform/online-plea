// ==========================================================================
// Controllers
// ==========================================================================


pleaApp.controller('mainController', function($scope, $location) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-case');
  };

});


pleaApp.controller('yourCaseController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-details');
  };
  
});


/*pleaApp.controller('caseDetailsController', function($scope, $location, PleaData) {
  
  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-details');
  };

});*/


pleaApp.controller('yourDetailsController', function($scope, $location, PleaData) {
  
  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-pleas');
  };

});


pleaApp.controller('yourPleasController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-employment');
  };

});


pleaApp.controller('yourEmploymentController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) { 
       
    event.preventDefault();
    
    if($scope.data.employment === 'Receiving out of work benefits') {
      
      $location.path('/your-finances/work-benefits');
      
    } else if ($scope.data.employment === 'Other') {
      
      $location.path('/your-finances/other');
      
    } else {
      
      $location.path('/your-finances/employed');
      
    }
    
  };

});


pleaApp.controller('yourFinancesController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-expenses');
  };

});


pleaApp.controller('yourExpensesController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-expenses/other');
  };

});


pleaApp.controller('otherExpensesController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirm-plea');
  };

});


pleaApp.controller('confirmPleaController', function($scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});

