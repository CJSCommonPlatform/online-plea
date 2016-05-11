(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaHelpController', PleaHelpController);
    
  PleaHelpController.$inject = ['$scope', '$state', 'backLink'];  
    
  function PleaHelpController($scope, $state, backLink) {
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) {
      event.preventDefault();
      $state.go('index');
    };
  }

})();