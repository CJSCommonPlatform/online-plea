(function() {
  'use strict';

  describe('constant decimalLimit', function() {

    var decimalLimit;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_decimalLimit_) {
      decimalLimit = _decimalLimit_;
    }));

    it('should be registered', function() {
      expect(decimalLimit).toBeDefined();
    });

    it('should match', function() {
      var validExamples = [
        '12345.12',
        '12345',
        '0.50',
        '0.5',
        '1'
      ];
      angular.forEach(validExamples, function(validExample) {
        expect(new RegExp(decimalLimit).test(validExample)).toEqual(true, validExample);
      });
    });

    it('should not match', function() {
      var invalidExamples = [
        '123456',
        '.50',
        '1.123',
        '-100'
      ];
      angular.forEach(invalidExamples, function(invalidExample) {
        expect(new RegExp(decimalLimit).test(invalidExample)).toEqual(false, invalidExample);
      });
    });
  });
})();