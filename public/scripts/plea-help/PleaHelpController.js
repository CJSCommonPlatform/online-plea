(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaHelpController', PleaHelpController);
    
  PleaHelpController.$inject = ['$scope', '$state'];  
    
  function PleaHelpController($scope, $state) {
    
    $scope.buttonContinue = function(event) {
      event.preventDefault();
      $state.go('index');
    };
  }

})();