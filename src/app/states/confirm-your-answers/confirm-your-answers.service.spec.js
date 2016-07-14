(function() {
  'use strict';

  describe('service confirmYourAnswers', function() {
    var confirmYourAnswers;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_confirmYourAnswers_, _sessionStorage_) {
      confirmYourAnswers = _confirmYourAnswers_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(confirmYourAnswers).not.toEqual(null);
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(confirmYourAnswers.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage; totalHouseholdExpenses; totalOtherExpenses; totalExpenses', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.');

        set('yourExpenses.household.accommodation', '11');
        set('yourExpenses.household.utilityBills', '20');
        set('yourExpenses.household.insurance', '30');
        set('yourExpenses.household.councilTax', '40');

        set('yourExpenses.other.televisionSubscription', '51');
        set('yourExpenses.other.travelExpenses', '60');
        set('yourExpenses.other.telephone', '70');
        set('yourExpenses.other.loanRepayments', '80');
        set('yourExpenses.other.countyCourtOrders', '90');
        set('yourExpenses.other.fines', '100');
        set('yourExpenses.other.childMaintenance', '110');
        set('yourExpenses.other.otherSignificantExpensesTotal', '120');

        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.yourExpenses.household.totalHouseholdExpenses).toEqual(101);
        expect(vm.yourExpenses.other.totalOtherExpenses).toEqual(681);
        expect(vm.yourExpenses.totalExpenses).toEqual(782);
      });

      it('should update vm with data from sessionStorage; employmentStatus; totalWeeklyIncome', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.');
        set('yourEmployment.employmentStatus', 'Other');
        set('yourEmployment.provideDetails', 'Retired');
        set('yourEmployment.paymentAmount', '250');
        set('yourBenefits.benefitAmount', '250');
        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.yourEmployment.employmentStatus).toEqual('Retired');
        expect(vm.yourEmployment.totalWeeklyIncome).toEqual(500);
      });

      it('should update vm with data from sessionStorage; dateOfBirth', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.');
        set('yourDetails.dateOfBirthDay', 20);
        set('yourDetails.dateOfBirthMonth', 3);
        set('yourDetails.dateOfBirthYear', 1982);
        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.dateOfBirth).toEqual(new Date(1982, 3 - 1, 20));
      });

      it('should update vm with data from sessionStorage; otherSignificantExpenses=NO', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourExpenses.other.');
        set('otherSignificantExpenses', 'No');
        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.pleaApp.yourExpenses.other.otherSignificantExpenses).toEqual('No');
        expect(vm.yourExpenses.other.otherSignificantExpensesDetails).toEqual('None');
      });

      it('should update vm with data from sessionStorage; otherSignificantExpenses=YES', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourExpenses.other.');
        set('otherSignificantExpenses', 'Yes');
        set('otherSignificantExpensesDetails', 'otherSignificantExpensesDetails');
        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.pleaApp.yourExpenses.other.otherSignificantExpenses).toEqual('Yes');
        expect(vm.yourExpenses.other.otherSignificantExpensesDetails).toEqual('otherSignificantExpensesDetails');
      });
    });
  });
})();