// ==========================================================================
// Controllers
// ==========================================================================


pleaApp.controller('mainController', function($scope, $location, backLink) {
  
  $scope.buttonContinue = function(event) {
    event.preventDefault();
    backLink.back();
    $location.path('/your-case');
  };

});


pleaApp.controller('yourCaseController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
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


pleaApp.controller('yourDetailsController', function($scope, $location, PleaData, backLink) {
  
  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-plea');
  };

});


pleaApp.controller('yourPleaController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-employment');
  };

});


pleaApp.controller('yourEmploymentController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
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


pleaApp.controller('yourFinancesController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    
    event.preventDefault();
    
    // If financial problems, goto expenses route
    
    if($scope.data.financialProblems === 'Yes') {
      
      $location.path('/your-expenses');
      
    } else {
      
      $location.path('/confirm-plea');
      
    }
    
  };

});


pleaApp.controller('yourExpensesController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/your-expenses/other');
  };

});


pleaApp.controller('otherExpensesController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirm-plea');
  };

});


pleaApp.controller('confirmPleaController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/confirmation');
  };

});


pleaApp.controller('confirmationController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});


pleaApp.controller('pleaHelpController', function($scope, $location, PleaData, backLink) {

  $scope.data = PleaData.data;

  $scope.backLink = function() {
    backLink.back();
  };

  $scope.buttonContinue = function(event) {
    event.preventDefault();
    $location.path('/');
  };

});

