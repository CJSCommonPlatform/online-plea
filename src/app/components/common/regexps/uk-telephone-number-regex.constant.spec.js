(function() {
  'use strict';

  describe('constant ukTelephoneNumberRegex', function() {

    var ukTelephoneNumberRegex;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_ukTelephoneNumberRegex_) {
      ukTelephoneNumberRegex = _ukTelephoneNumberRegex_;
    }));

    it('should be registered', function() {
      expect(ukTelephoneNumberRegex).toBeDefined();
    });

    it('should match', function() {
      var validExamples = [
        '070 1234 1234'
      ];
      angular.forEach(validExamples, function(validExample) {
        expect(new RegExp(ukTelephoneNumberRegex).test(validExample)).toEqual(true);
      });
    });

    it('should not match', function() {
      var invalidExamples = [
        '0707 1234 1234'
      ];
      angular.forEach(invalidExamples, function(invalidExample) {
        expect(new RegExp(ukTelephoneNumberRegex).test(invalidExample)).toEqual(false);
      });
    });
  });
})();