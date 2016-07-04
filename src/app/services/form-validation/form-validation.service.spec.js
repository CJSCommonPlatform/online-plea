(function() {
  'use strict';

  describe('service formValidation', function() {

    var formValidation;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_formValidation_) {
      formValidation = _formValidation_;
    }));

    it('should be registered', function() {
      expect(formValidation).not.toEqual(null);
    });

    describe('validate function', function() {

      it('should exist', function() {
        expect(formValidation.validate).not.toEqual(null);
      });

      it('should validate form; invalid', function() {
        //given
        var form = {
          '$invalid': true,
          '$name': 'vm.form',
          'plea': {
            '$invalid': true,
            '$error': {
              required: true
            }
          }
        }
        //when
        formValidation.validate(form);
        //then
        expect(form.invalid).toEqual(true);
        expect(form['plea'].invalid).toEqual(true);
        expect(form['plea'].error.required).toEqual(true);
      });

      it('should validate form; valid', function() {
        //given
        var form = {
          '$invalid': false,
          '$name': 'vm.form',
          'plea': {
            '$invalid': false,
            '$error': {
            }
          }
        }
        //when
        formValidation.validate(form);
        //then
        expect(form.invalid).toEqual(false);
        expect(form['plea'].invalid).toEqual(false);
        expect(form['plea'].error.required).not.toBeDefined();
      });

    });
  });
})();