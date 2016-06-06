(function () {
    'use strict';

    angular
      .module('pleaApp')
      .directive('formAriaDescribedby', function() {
        return {
          restrict: 'A',
          require: 'ngModel',
          scope: {
            parent: '='
          },
          controller: function($scope) {
            console.log('test');
              console.log($scope.parent);
          },

          link: function(scope, elem, attr, field) {
            scope.field = field;

            scope.$watch('field.$invalid', function(newValue, oldValue) {
              var id = attr['id'];
              if (field.submitted && newValue) {
                elem.attr('aria-describedby', 'error-message-' + id);
              } else {
                elem.attr('aria-describedby',  id + '-hint');
              }
            }, true);
          }
        };
    });

})();