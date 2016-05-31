(function() {
  'use strict';

  describe('service yourBenefits', function() {
    var yourBenefits;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourBenefits_, _sessionStorage_) {
      yourBenefits = _yourBenefits_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(yourBenefits).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(yourBenefits.updateSessionStorage).not.toEqual(null);
      });

      it('should update sessionStorage with data from vm; benefitFrequency=Weekly', function() {
        test('Weekly', 'weeklyBenefitPay');
      });

      it('should update sessionStorage with data from vm; benefitFrequency=Fortnightly', function() {
        test('Fortnightly', 'fortnightlyBenefitPay');
      });

      it('should update sessionStorage with data from vm; benefitFrequency=Monthly', function() {
        test('Monthly', 'monthlyBenefitPay');
      });

      it('should update sessionStorage with data from vm; financialProblems=No', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourExpenses.');
        set('foo', 'foo');
        var vm = {
          benefit: 'benefit',
          benefitFrequency: 'Weekly',
          weeklyBenefitPay: '100',
          financialProblems: 'No',
          financialProblemsJustification: 'financialProblemsJustification'
        }
        //when
        yourBenefits.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourBenefits.');
        expect(get('benefit')).toEqual('benefit');
        expect(get('benefitFrequency')).toEqual('Weekly');
        expect(get('benefitAmount')).toEqual('100');
        expect(get('financialProblems')).toEqual('No');
        expect(get('financialProblemsJustification')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourExpenses.')('')).not.toBeDefined();
      });

      function test(benefitFrequency, weeklyBenefitPayPropertyName) {
        //given
        var vm = {
          benefit: 'benefit',
          benefitFrequency: benefitFrequency,
          financialProblems: 'Yes',
          financialProblemsJustification: 'financialProblemsJustification'
        }
        vm[weeklyBenefitPayPropertyName] = '100';
        //when
        yourBenefits.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourBenefits.');
        expect(get('benefit')).toEqual('benefit');
        expect(get('benefitFrequency')).toEqual(benefitFrequency);
        expect(get('benefitAmount')).toEqual('100');
        expect(get('financialProblems')).toEqual('Yes');
        expect(get('financialProblemsJustification')).toEqual('financialProblemsJustification');
      }

    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourBenefits.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage; benefitFrequency=Weekly', function() {
        test('Weekly', 'weeklyBenefitPay');
      });

      it('should update vm with data from sessionStorage; benefitFrequency=Fortnightly', function() {
        test('Fortnightly', 'fortnightlyBenefitPay');
      });

      it('should update vm with data from sessionStorage; benefitFrequency=Monthly', function() {
        test('Monthly', 'monthlyBenefitPay');
      });

      function test(benefitFrequency, benefitPayPropertyName) {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourBenefits.');
        set('benefit', 'benefit');
        set('benefitFrequency', benefitFrequency)
        set('benefitAmount', '100')
        set('financialProblems', 'Yes')
        set('financialProblemsJustification', 'financialProblemsJustification')
        //when
        var vm = {};
        yourBenefits.updateVm(vm);
        //then
        expect(vm.benefit).toEqual('benefit');
        expect(vm.benefitFrequency).toEqual(benefitFrequency);
        expect(vm[benefitPayPropertyName]).toEqual('100');
        expect(vm.financialProblems).toEqual('Yes');
        expect(vm.financialProblemsJustification).toEqual('financialProblemsJustification');
      }
    });
  });
})();