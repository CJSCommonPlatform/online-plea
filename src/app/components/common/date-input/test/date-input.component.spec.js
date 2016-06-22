describe('Component: dateInput', function () {

  'use strict';

  var $compile,
    $timeout,
    $document,
    scope,
    element,
    stringDate,
    controller;

  beforeEach(
  module('cpp-ui-spa-master',
  'cpp-ui-spa-master.application',
  'templates'));

  beforeEach(inject(function ($rootScope, _$compile_, _$timeout_, _$document_) {

    scope = $rootScope.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;
    $document = _$document_;

    scope.parentModel = { stringDate: '2016-10-02' }; // e.g. date retrieved from backend
    element = angular.element([
      '<form name="parentForm">',
      '<date-input name="dateComponent" ng-model="parentModel.stringDate"></date-input>',
      '</form>'].join(''));

    element = $compile(element)(scope);
    scope.$digest();

    controller = element.find('date-input').controller('dateInput');
  }));

  describe('when controller initialised', function () {

    it('should have a defined REQUIRED objects', function () {
      expect(controller.ngModel).toBeDefined();
      expect(controller.ngModel.$modelValue).toBe('2016-10-02');

      expect(controller.parentForm).toBeDefined();
      expect(controller.dateForm).toBeDefined(); //date ng-form
    });

    it('should parse controller date into DD, MM, YYYY', function () {
      expect(controller.dateDay).toBe('02');
      expect(controller.dateMonth).toBe('10');
      expect(controller.dateYear).toBe('2016');
    });
  });

  describe('when blur is triggered', function () {

    it('should check if any date field was touched and no longer has focus', function () {

      element.find('date-input').find('[name="dateDay"]').trigger('input').trigger('blur');
      element.find('date-input').find('[name="dateMonth"]').trigger('input').trigger('blur');
      element.find('date-input').find('[name="dateYear"]').trigger('input').trigger('blur');

      $timeout.flush();

      expect(controller.communicate).toBeTruthy(); // can communicate error to the host form - parent
    });
  });

  describe('when a date field is changed', function () {

    it('should validate the DAY field and construct a valid date', function () {

      // assuming entered day is 04...
      element.find('date-input').find('[name="dateDay"]').val('04').trigger('input').trigger('change');
      scope.$digest();

      // assert constructed date to be 2016-10-04
      expect(controller.ngModel.$viewValue).toEqual('2016-10-04');
    });

    it('should validate the YEAR field and construct a valid date', function () {

      // assuming entered year is 2015...
      element.find('date-input').find('[name="dateYear"]').val('2015').trigger('input').trigger('change');
      scope.$digest();

      // assert constructed date to be 2015-10-02
      expect(controller.ngModel.$viewValue).toEqual('2015-10-02');
    });

    it('should validate the Month field and construct an invalid date', function () {

      controller.communicate = true;

      // assuming entered month is 13...
      element.find('date-input').find('[name="dateMonth"]').val('13').trigger('input').trigger('change');
      scope.$digest();

      // assert constructed date to be 0
      expect(controller.ngModel.$viewValue).toEqual(0);
      expect(controller.ngModel.$valid).toBeFalsy();
    });
  });
});