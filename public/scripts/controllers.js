// ==========================================================================
// Controllers
// ==========================================================================


atcmApp.controller('mainController', function($scope, $location) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-case');
  };

});


atcmApp.controller('yourCaseController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/case-details');
  };
  
});


atcmApp.controller('caseDetailsController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-details');
  };

});


atcmApp.controller('yourDetailsController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-pleas');
  };

});


atcmApp.controller('yourPleasController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-employment');
  };

});


atcmApp.controller('yourEmploymentController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-finances');
  };

});


atcmApp.controller('yourFinancesController', function($scope, $location) {

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('');
  };

});

