// ==========================================================================
// Controllers
// ==========================================================================


pleaApp.controller('mainController', function($scope, $location) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-case');
  };

});


pleaApp.controller('yourCaseController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/case-details');
  };
  
});


pleaApp.controller('caseDetailsController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-details');
  };

});


pleaApp.controller('yourDetailsController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-pleas');
  };

});


pleaApp.controller('yourPleasController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-employment');
  };

});


pleaApp.controller('yourEmploymentController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-finances');
  };

});


pleaApp.controller('yourFinancesController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirm-plea');
  };

});


pleaApp.controller('confirmPleaController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});

