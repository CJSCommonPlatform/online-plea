(function() {
    'use strict';
    angular
    .module('pleaApp')
    .directive('ariaAttrs', function () {
      return {
          restrict: 'A',
          link: AriaAttrsLinkFunction
      };
    });

    function AriaAttrsLinkFunction(scope, element, attr) {
      element.attr({
        'aria-required': 'true', 
        'data-ng-attr-aria-invalid': scope.vm.form.$invalid ? 'true' : 'undefined',
        'data-ng-attr-aria-describedby': scope.vm.form.$invalid ? ('error-message-' + scope.vm.name) : 'undefined',
        'data-ng-attr-aria-expanded': scope.vm.property === scope.vm.value ? 'true' : 'undefined'
      });
    }

})(); 