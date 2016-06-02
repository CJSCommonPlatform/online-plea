(function () {
    'use strict';

    angular
      .module('pleaApp')
      .directive('focus', function($timeout, $window) {
        return {
          restrict: 'A',
          link: function(scope, elem, attr) {
            elem.on(attr.focusEvent, function() {
              var id = attr.focusTarget;

              $timeout(function () {
                var element = $window.document.getElementById(id);
                if (element) {
                  element.focus();
                }
              });

            });
            scope.$on('$destroy', function() {
               elem.off(attr.focusEvent);
            });
          }
        };
    });

})();