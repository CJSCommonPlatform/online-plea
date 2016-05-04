// ==========================================================================
// Controllers
// ==========================================================================


pleaApp.controller('mainController', function($scope, $location) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-case');
  };

});


pleaApp.controller('yourCaseController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();

    $scope.enterReferenceClicked = function() {
      $scope.referenceFocused = true;
    };

    $scope.enterPostcodeClicked = function() {
      $scope.postcodeFocused = true;
    };

    $scope.referenceAriaDescribedBy = function() {
      return $scope.myform.reference.$myinvalid ? 'error-message-reference' : 'reference-hint';
    };

    $scope.postcodeAriaDescribedBy = function() {
      return $scope.myform.postcode.$myinvalid ? 'error-message-postcode' : 'postcode-hint';
    };  

    $scope.myform.$submitted = true;

    if ($scope.myform.$invalid) {
       $scope.errorSummaryFocused = true;
       $scope.myform.$myinvalid = $scope.myform.$invalid;
       $scope.myform.reference.$myinvalid = $scope.myform.reference.$invalid;
       $scope.myform.postcode.$myinvalid = $scope.myform.postcode.$invalid;
    }

    if ($scope.myform.$valid) {
      $location.path('/your-details');
    }    
  };
  
});


pleaApp.controller('yourDetailsController', function($rootScope, $scope, $location, PleaData) {
  
  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-pleas');
  };

});


pleaApp.controller('yourPleasController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-employment');
  };

});


pleaApp.controller('yourEmploymentController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

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


pleaApp.controller('yourFinancesController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-expenses');
  };

});


pleaApp.controller('yourExpensesController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-expenses/other');
  };

});


pleaApp.controller('otherExpensesController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirm-plea');
  };

});


pleaApp.controller('confirmPleaController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirmation');
  };

});


pleaApp.controller('confirmationController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});


pleaApp.controller('pleaHelpController', function($rootScope, $scope, $location, PleaData) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    $rootScope.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});

pleaApp.run(function ($rootScope, $location) {

    var history = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        if (history[history.length - 1] !== $location.$$path) {
          history.push($location.$$path);
        }
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        return $location.path(prevUrl);
    };

});
