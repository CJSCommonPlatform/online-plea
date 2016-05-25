(function() {


  'use strict';


  describe('YourCaseController', function(){
    var vm;
    var scope;
    var $state;
    var event;
    var sessionStorage;


    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _$sessionStorage_) {
      sessionStorage = _$sessionStorage_;
      scope = $rootScope.$new();
      vm = _$controller_('YourCaseController', { $scope: scope, $sessionStorage:sessionStorage });
      $state = _$state_;
      $state.go('your-case');
      scope.$apply();
      event = jasmine.createSpyObj('event', ['preventDefault']);
      vm.form = jasmine.createSpyObj('form', ['$submitted', '$valid', '$myinvalid', 'caseReference', 'casePostcode']);
      vm.form.$submitted = false;
      vm.form.reference = jasmine.createSpyObj('caseReference', ['$myinvalid']);
      vm.form.postcode = jasmine.createSpyObj('casePostcode', ['$myinvalid']);
    }));


    it('should preventDefault on the event when continue button was clicked', function() {
      //when
      vm.continueButtonClicked(event);
      //then
      expect(event.preventDefault).toHaveBeenCalled();
    });


    it('should move to your-details when continue button was clicked and the form was valid', function() {
      //given
      expect($state.current.name).toEqual('your-case');
      vm.form.$valid = true;
      //when
      vm.continueButtonClicked(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-details');
    });


    it('should stay on your-case after continue button was clicked and the form was invalid', function() {
      //given
      expect($state.current.name).toEqual('your-case');
      vm.form.$valid = false;
      //when
      vm.continueButtonClicked(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-case');
    });


    it('should submit the form when continue button was clicked', function() {
      //given
      expect(vm.form.$submitted).toBe(false);
      //when
      vm.continueButtonClicked(event);
      //then
      expect(vm.form.$submitted).toBe(true);
    });


    it('should update reference aria attributes when continue button was clicked and the reference field was invalid', function() {
      //given
      expect(vm.caseReferenceAriaDescribedBy).toBe('case-reference-hint');
      expect(vm.caseReferenceAriaInvalid).toBe(false);
      //when
      vm.form.$valid = false;
      vm.form.caseReference.$invalid = true;
      vm.continueButtonClicked(event);
      //then
      expect(vm.caseReferenceAriaDescribedBy).toBe('error-message-case-reference');
      expect(vm.caseReferenceAriaInvalid).toBe(true);
    });


    it('should update reference aria attributes when continue button was clicked and the reference field was valid', function() {
      //given
      vm.form.$valid = false;
      vm.form.caseReference.$invalid = true;
      vm.continueButtonClicked(event);
      expect(vm.caseReferenceAriaDescribedBy).toBe('error-message-case-reference');
      expect(vm.caseReferenceAriaInvalid).toBe(true);
      //when
      vm.form.$valid = true;
      vm.form.caseReference.$invalid = false;
      vm.continueButtonClicked(event);
      //then
      expect(vm.caseReferenceAriaDescribedBy).toBe('case-reference-hint');
      expect(vm.caseReferenceAriaInvalid).toBe(false);
    });


    it('should update postcode aria attributes when continue button was clicked and the postcode field was invalid', function() {
      //given
      expect(vm.casePostcodeAriaDescribedBy).toBe('case-postcode-hint');
      expect(vm.casePostcodeAriaInvalid).toBe(false);
      vm.form.casePostcode.$invalid = true;
      //when
      vm.continueButtonClicked(event);
      //then
      expect(vm.casePostcodeAriaDescribedBy).toBe('error-message-case-postcode');
      expect(vm.casePostcodeAriaInvalid).toBe(true);
    });


    it('should update postcode aria attributes when continue button was clicked and the postcode field was valid', function() {
      //given
      vm.form.casePostcode.$invalid = true;
      vm.continueButtonClicked(event);
      expect(vm.casePostcodeAriaDescribedBy).toBe('error-message-case-postcode');
      expect(vm.casePostcodeAriaInvalid).toBe(true);
      vm.form.casePostcode.$invalid = false;
      //when
      vm.continueButtonClicked(event);
      //then
      expect(vm.casePostcodeAriaDescribedBy).toBe('case-postcode-hint');
      expect(vm.casePostcodeAriaInvalid).toBe(false);
    });


    it('should focus error summary when continue button was clicked and the form was invalid', function() {
      //given
      expect(vm.errorSummaryFocused).not.toBe(true);
      vm.form.$invalid = true;
      //when
      vm.continueButtonClicked(event);
      //then
      expect(vm.errorSummaryFocused).toBe(true);
    });


    it('should focus reference input when enter reference link was clicked', function() {
      //given
      expect(vm.caseReferenceFocused).not.toBe(true);
      //when
      vm.enterCaseReferenceLinkClicked();
      //then
      expect(vm.caseReferenceFocused).toBe(true);
    });


    it('should focus postcode input when enter postcode link was clicked', function() {
      //given
      expect(vm.casePostcodeFocused).not.toBe(true);
      //when
      vm.enterCasePostcodeLinkClicked();
      //then
      expect(vm.casePostcodeFocused).toBe(true);
    });


    it('should show error summary when continue button was clicked and the form was invalid', function() {
      //given
      expect(vm.showErrorSummary).toBe(false);
      vm.form.$invalid = true;
      //when
      vm.continueButtonClicked(event);
      //then
      expect(vm.showErrorSummary).toBe(true);
    });


    it('should store user input values in session storage when continue button was clicked and the form was valid ', function() {
      var exampleCaseReference = '13LD0338416';
      var exampleCasePostcode = 'LS9 6DP';
      //given
      vm.caseReference = exampleCaseReference;
      vm.casePostcode = exampleCasePostcode;
      vm.form.$valid = true;
      //when
      vm.continueButtonClicked(event);
      //then
      expect(sessionStorage.pleaApp.yourCase.caseReference).toBe(exampleCaseReference);
      expect(sessionStorage.pleaApp.yourCase.casePostcode).toBe(exampleCasePostcode);
    });


  });


})();
