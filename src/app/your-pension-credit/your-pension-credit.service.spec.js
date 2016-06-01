(function() {
  'use strict';

  describe('service yourPensionCredit', function() {
    var yourPensionCredit;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourPensionCredit_, _sessionStorage_) {
      yourPensionCredit = _yourPensionCredit_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(yourPensionCredit).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(yourPensionCredit.updateSessionStorage).not.toEqual(null);
      });

      it('should work for weekly', function() {
        test('Weekly', '100', 'weeklyPensionCreditPay');
      })

      it('should work for fortnightly', function() {
        test('Fortnightly', '200', 'fortnightlyPensionCreditPay');
      })

      it('should work for monthly', function() {
        test('Monthly', '300', 'monthlyPensionCreditPay');
      });

      function test(pensionCreditFrequency, pensionCreditAmount, pensionCreditAmountPropertyName) {
        //given
        var vm = {}
        vm['pensionCreditFrequency'] = pensionCreditFrequency;
        vm[pensionCreditAmountPropertyName] = pensionCreditAmount;
        //when
        yourPensionCredit.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourPensionCredit.');
        expect(get('pensionCreditFrequency')).toEqual(pensionCreditFrequency);
        expect(get('pensionCreditAmount')).toEqual(pensionCreditAmount);
      }
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(sessionStorage.updateVm).not.toEqual(null);
      });

      it('should work for weekly', function() {
        test('Weekly', '100', 'weeklyPensionCreditPay');
      })

      it('should work for fortnightly', function() {
        test('Fortnightly', '200', 'fortnightlyPensionCreditPay');
      })

      it('should work for monthly', function() {
        test('Monthly', '300', 'monthlyPensionCreditPay');
      })

      function test(pensionCreditFrequency, pensionCreditAmount, pensionCreditAmountPropertyName) {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourPensionCredit.');
        set('pensionCreditFrequency', pensionCreditFrequency);
        set('pensionCreditAmount', pensionCreditAmount)
        //when
        var vm = {};
        yourPensionCredit.updateVm(vm);
        //then
        expect(vm.pensionCreditFrequency).toEqual(pensionCreditFrequency);
        expect(vm[pensionCreditAmountPropertyName]).toEqual(pensionCreditAmount);
      }
    });
  });
})();