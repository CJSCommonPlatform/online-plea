(function() {

  'use strict';

  describe('EmploymentController', function(){
    var vm;
    var scope;
    var event;
    var $state;
    var employmentStatus;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _employmentStatus_) {
      scope = $rootScope.$new();
      $state = _$state_;
      employmentStatus = _employmentStatus_;
      vm = _$controller_('EmploymentController');
      vm.form = {};

      event = jasmine.createSpyObj('event', ['preventDefault']);

      $state.go('your-employment');
      scope.$apply();
    }));

    it('should preventDefault on the event when continue button was clicked', function() {
      //given
      vm.employment = employmentStatus.EMPLOYED;
      //when
      vm.buttonContinue(event);
      //then
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should move to employment.employed.finances when EMPLOYED', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.EMPLOYED;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment.employed.finances');
    });

    it('should move to employment.employed-receiving-benefits.finances when EMPLOYED_BENEFITS', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.EMPLOYED_BENEFITS;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment.employed-and-also-receiving-benefits.finances');
    });

    it('should move to employment.self-employed.finances when SELF_EMPLOYED', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.SELF_EMPLOYED;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment.self-employed.finances');
    });

    it('should move to employment.self-employed-receiving-benefits.finances when SELF_EMPLOYED_BENEFITS', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.SELF_EMPLOYED_BENEFITS;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment.self-employed-and-also-receiving-benefits.finances');
    });

    it('should move to employment.self-employed-receiving-benefits.finances when OUT_OF_WORK_BENEFITS', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.OUT_OF_WORK_BENEFITS;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-benefits');
    });

    it('should move to employment.other.finances when OTHER', function() {
      //given
      expect($state.current.name).toEqual('your-employment');
      vm.employment = employmentStatus.OTHER;
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment.other.finances');
    });

  });
})();
