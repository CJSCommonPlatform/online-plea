(function() {
  'use strict';

  describe('service yourEmploymentFinances', function() {
    var yourEmploymentFinances;
    var sessionStorage;
    var employmentStatus;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourEmploymentFinances_, _sessionStorage_, _employmentStatus_) {
      yourEmploymentFinances = _yourEmploymentFinances_;
      sessionStorage = _sessionStorage_;
      employmentStatus = _employmentStatus_;
    }));

    it('should be registered', function() {
      expect(yourEmploymentFinances).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(yourEmploymentFinances.updateSessionStorage).not.toEqual(null);
      });

      it('should update sessionStorage with data from vm; paymentFrequency=Weekly; financialProblems=No', function() {
        sessionStorage.getSetter('pleaApp.yourExpenses.')('foo', 'bar');
        sessionStorage.getSetter('pleaApp.yourBenefits.')('foo', 'bar');
        //given
        var vm = {
          employmentStatus: employmentStatus.Employed,
          provideDetails: 'provideDetails',
          sourceIncome: 'sourceIncome',
          paymentFrequency: 'Weekly',
          weeklyPay: '100',
          pensionCredit: 'Yes',
          financialProblems: 'No',
          financialProblemsJustification: 'financialProblemsJustification'
        }
        //when
        yourEmploymentFinances.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourEmployment.');
        expect(get('employmentStatus')).toEqual(employmentStatus.Employed);
        expect(get('provideDetails')).toEqual('provideDetails');
        expect(get('sourceIncome')).toEqual('sourceIncome');
        expect(get('paymentFrequency')).toEqual('Weekly');
        expect(get('paymentAmount')).toEqual('100');
        expect(get('pensionCredit')).toEqual('Yes');
        expect(get('financialProblems')).toEqual('No');
        expect(get('financialProblemsJustification')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourExpenses.')('')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourBenefits.')('')).not.toBeDefined();
      });

      it('should update sessionStorage with data from vm; paymentFrequency=Weekly; financialProblems=Yes', function() {
        test('Weekly', 'weeklyPay');
      });

      it('should update sessionStorage with data from vm; paymentFrequency=Fortnightly; financialProblems=Yes', function() {
        test('Fortnightly', 'fortnightlyPay');
      });

      it('should update sessionStorage with data from vm; paymentFrequency=Monthly; financialProblems=Yes', function() {
        test('Monthly', 'monthlyPay');
      });

      it('should update sessionStorage with data from vm; paymentFrequency=Other; financialProblems=Yes', function() {
        test('Other', 'otherPay');
      });

      function test(paymentFrequency, pay) {
        //given
        var vm = {
          employmentStatus: employmentStatus.Employed,
          provideDetails: 'provideDetails',
          sourceIncome: 'sourceIncome',
          paymentFrequency: paymentFrequency,
          pensionCredit: 'Yes',
          financialProblems: 'Yes',
          financialProblemsJustification: 'financialProblemsJustification'
        }
        vm[pay] = '100';
        //when
        yourEmploymentFinances.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourEmployment.');
        expect(get('employmentStatus')).toEqual(employmentStatus.Employed);
        expect(get('provideDetails')).toEqual('provideDetails');
        expect(get('sourceIncome')).toEqual('sourceIncome');
        expect(get('paymentFrequency')).toEqual(paymentFrequency);
        expect(get('paymentAmount')).toEqual('100');
        expect(get('pensionCredit')).toEqual('Yes');
        expect(get('financialProblems')).toEqual('Yes');
        expect(get('financialProblemsJustification')).toEqual('financialProblemsJustification');
      }
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourEmploymentFinances.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage; paymentFrequency=Weekly', function() {
        test('Weekly', 'weeklyPay');
      })

      it('should update vm with data from sessionStorage; paymentFrequency=Fortnightly', function() {
        test('Fortnightly', 'fortnightlyPay');
      })

      it('should update vm with data from sessionStorage; paymentFrequency=Monthly', function() {
        test('Monthly', 'monthlyPay');
      })

      it('should update vm with data from sessionStorage; paymentFrequency=Other', function() {
        test('Other', 'otherPay');
      })

      function test(paymentFrequency, pay) {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourEmployment.');
        set('employmentStatus', 'employmentStatus');
        set('provideDetails', 'provideDetails');
        set('sourceIncome', 'sourceIncome');
        set('paymentFrequency', paymentFrequency);
        set('paymentAmount', '100');
        set('pensionCredit', 'pensionCredit');
        set('financialProblems', 'financialProblems');
        set('financialProblemsJustification', 'financialProblemsJustification');
        //when
        var vm = {};
        yourEmploymentFinances.updateVm(vm);
        //then
        expect(vm.employmentStatus).toEqual('employmentStatus');
        expect(vm.provideDetails).toEqual('provideDetails');
        expect(vm.sourceIncome).toEqual('sourceIncome');
        expect(vm.paymentFrequency).toEqual(paymentFrequency);
        expect(vm[pay]).toEqual('100');
        expect(vm.pensionCredit).toEqual('pensionCredit');
        expect(vm.financialProblems).toEqual('financialProblems');
        expect(vm.financialProblemsJustification).toEqual('financialProblemsJustification');
      }
    });
  });
})();