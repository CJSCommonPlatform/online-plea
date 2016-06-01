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

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.');
        set('yourDetails.dateOfBirthDay', 20);
        set('yourDetails.dateOfBirthMonth', 3);
        set('yourDetails.dateOfBirthYear', 1982);
        set('yourEmployment.employmentStatus', 'Other');
        set('yourEmployment.provideDetails', 'Retired');
        set('yourEmployment.paymentAmount', '100');
        set('yourBenefits.benefitAmount', '100');

        set('yourExpenses.household.accomodation', '11');
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

        set('yourExpenses.other.otherExpenses', 'Yes');
        set('yourExpenses.other.otherExpensesMonthly', '120');
        set('yourExpenses.other.otherExpensesDetails', 'otherExpensesDetails');
        //when
        var vm = {};
        confirmYourAnswers.updateVm(vm);
        //then
        expect(vm.dateOfBirth).toEqual(new Date(1982, 3 - 1, 20));
        expect(vm.totalWeeklyIncome).toEqual(200);
        expect(vm.totalHouseholdExpenses).toEqual(101);
        expect(vm.totalOtherExpenses).toEqual(681);
        expect(vm.employmentStatus).toEqual('Retired');
        expect(vm.otherExpenses).toEqual('otherExpensesDetails');
        expect(vm.totalExpenses).toEqual(782);
      });
    });
  });
})();