(function() {
  'use strict';

  describe('constant emailAddressRegex', function() {

    var emailAddressRegex;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_emailAddressRegex_) {
      emailAddressRegex = _emailAddressRegex_;
    }));

    it('should be registered', function() {
      expect(emailAddressRegex).toBeDefined();
    });

    it('should match', function() {
      var validExamples = [
        'firstName.lastName@gmail.com',
        'niunia16@o2.pl'
      ];
      angular.forEach(validExamples, function(validExample) {
        expect(new RegExp(emailAddressRegex).test(validExample)).toEqual(true, validExample);
      });
    });

    it('should not match', function() {
      var invalidExamples = [
        'firstName.lastName@.com'
      ];
      angular.forEach(invalidExamples, function(invalidExample) {
        expect(new RegExp(emailAddressRegex).test(invalidExample)).toEqual(false, invalidExample);
      });
    });
  });
})();