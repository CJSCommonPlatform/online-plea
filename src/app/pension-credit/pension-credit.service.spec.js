(function() {
  'use strict';

  describe('service pensionCredit', function() {
    var pensionCredit;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_pensionCredit_, _sessionStorage_) {
      pensionCredit = _pensionCredit_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(pensionCredit).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(pensionCredit.updateSessionStorage).not.toEqual(null);
      });

      it('should work for Weekly', function() {
        //given
        var vm = {
          pensionCreditFrequency: 'Weekly',
          weeklyPensionCreditPay: '100'
        }
        //when
        pensionCredit.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.pensionCredit.');
        expect(get('pensionCreditFrequency')).toEqual('Weekly');
        expect(get('pensionCreditAmount')).toEqual('100');
      })

      it('should work for Monthly', function() {
        //given
        var vm = {
          pensionCreditFrequency: 'Monthly',
          monthlyPensionCreditPay: '200'
        }
        //when
        pensionCredit.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.pensionCredit.');
        expect(get('pensionCreditFrequency')).toEqual('Monthly');
        expect(get('pensionCreditAmount')).toEqual('200');
      })
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(sessionStorage.updateVm).not.toEqual(null);
      });
    });
  });
})();
