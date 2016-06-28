// (function () {

//   'use strict';

//   angular
//     .module('pleaApp')
//     .component('formInputRadio', {
//       controller: FormInputRadioController,
//       controllerAs: 'vm',
//       templateUrl: 'app/components/form/form-input-radio.html',
//       bindings: {
//         name: '@',
//         value: '@',
//         form: '<',
//         property: '<',
//         onUpdate: '&'
//       }
//     });

//   function FormInputRadioController() {
//     var vm = this;

//     vm.onClick = function(value) {
//       vm.onUpdate({value: value});
//     }
//   }

// }());


(function() {
    'use strict';
    angular
    .module('pleaApp')
    .directive('formInputRadio', function () {
      return {
          restrict: 'AE',
          replace: true,
          scope: {},
          controller:  FormInputRadioController,
          controllerAs: 'vm',
          bindToController: {
            name: '@',
            value: '@',
            form: '<',
            property: '<',
            onUpdate: '='
          },
          templateUrl: 'app/components/form/form-input-radio.html'
      };
    });

    function FormInputRadioController() {
      
      var vm = this;
      vm.onClick = function(value) {
        vm.onUpdate(value);
      }

    }

})(); 
