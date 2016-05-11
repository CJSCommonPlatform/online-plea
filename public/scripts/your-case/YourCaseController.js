(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);
    
  YourCaseController.$inject = ['$scope', '$state', '$sessionStorage', 'PleaData', 'backLink'];
    
  function YourCaseController($scope, $state, $sessionStorage, PleaData, backLink) {

    $scope.data = PleaData.data;

    $scope.backLink = backLink.back;

    $scope.enterReferenceClicked = function() {
      $scope.referenceFocused = true;
    };

    $scope.enterPostcodeClicked = function() {
      $scope.postcodeFocused = true;
    };

    $scope.buttonContinue = function(event) {
      event.preventDefault();

      $sessionStorage.data = $scope.data;

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
        var nextState = $state.current.data.nextState;
        $state.go(nextState);
      }    
    };
  }  
  
})();