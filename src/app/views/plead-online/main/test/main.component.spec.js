//TODO: Need to update this after moving onto component based architecture

// (function() {
//   'use strict';

//   describe('MainController', function() {
//     var scope;
//     var vm;
//     var $state;

//     beforeEach(module('pleaApp'));

//     beforeEach(inject(function($rootScope, _$controller_, _$state_) {
//       scope = $rootScope.$new();
//       vm = _$controller_('MainController');
//       $state = _$state_;
//     }));

//     it('should be registered', function() {
//       expect(vm).not.toEqual(null);
//     });

//     describe('buttonContinue function', function() {
//       beforeEach(function() {
//         //given
//         $state.go('index');
//         scope.$apply();
//         expect($state.current.name).toEqual('index');
//       });

//       it('should go to the next state', function() {
//         //when
//         vm.buttonContinue();
//         scope.$apply();
//         //then
//         expect($state.current.name).toEqual('your-case');
//       });
//     });
//   });
// })();