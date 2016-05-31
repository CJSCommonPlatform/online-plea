(function() {
  'use strict';

  describe('service otherExpenses', function() {
    var otherExpenses;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_otherExpenses_, _sessionStorage_) {
      otherExpenses = _otherExpenses_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(otherExpenses).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(otherExpenses.updateSessionStorage).not.toEqual(null);
      });

      it('should update sessionStorage with data from vm; otherExpenses=Yes', function() {
        //given
        var vm = {
          televisionSubscription: 'televisionSubscription',
          travelExpenses: 'travelExpenses',
          telephone: 'telephone',
          loanRepayments: 'loanRepayments',
          countyCourtOrders: 'countyCourtOrders',
          fines: 'fines',
          childMaintenance: 'childMaintenance',
          otherExpenses: 'Yes',
          otherExpensesDetails: 'otherExpensesDetails',
          otherExpensesMonthly: 'otherExpensesMonthly'
        }
        //when
        otherExpenses.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourExpenses.other.');
        expect(get('televisionSubscription')).toEqual('televisionSubscription');
        expect(get('telephone')).toEqual('telephone');
        expect(get('loanRepayments')).toEqual('loanRepayments');
        expect(get('countyCourtOrders')).toEqual('countyCourtOrders');
        expect(get('fines')).toEqual('fines');
        expect(get('childMaintenance')).toEqual('childMaintenance');
        expect(get('otherExpenses')).toEqual('Yes');
        expect(get('otherExpensesDetails')).toEqual('otherExpensesDetails');
        expect(get('otherExpensesMonthly')).toEqual('otherExpensesMonthly');
      })

      it('should update sessionStorage with data from vm; otherExpenses=No', function() {
        //given
        var vm = {
          televisionSubscription: 'televisionSubscription',
          travelExpenses: 'travelExpenses',
          telephone: 'telephone',
          loanRepayments: 'loanRepayments',
          countyCourtOrders: 'countyCourtOrders',
          fines: 'fines',
          childMaintenance: 'childMaintenance',
          otherExpenses: 'No',
          otherExpensesDetails: 'otherExpensesDetails',
          otherExpensesMonthly: 'otherExpensesMonthly'
        }
        //when
        otherExpenses.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourExpenses.other.');
        expect(get('televisionSubscription')).toEqual('televisionSubscription');
        expect(get('telephone')).toEqual('telephone');
        expect(get('loanRepayments')).toEqual('loanRepayments');
        expect(get('countyCourtOrders')).toEqual('countyCourtOrders');
        expect(get('fines')).toEqual('fines');
        expect(get('childMaintenance')).toEqual('childMaintenance');
        expect(get('otherExpenses')).toEqual('No');
        expect(get('otherExpensesDetails')).not.toBeDefined();
        expect(get('otherExpensesMonthly')).not.toBeDefined();
      })

    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(otherExpenses.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage; otherExpenses=Yes', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourExpenses.other.');
        set('televisionSubscription', 'televisionSubscription');
        set('telephone', 'telephone')
        set('loanRepayments', 'loanRepayments')
        set('countyCourtOrders', 'countyCourtOrders')
        set('fines', 'fines')
        set('childMaintenance', 'childMaintenance')
        set('otherExpenses', 'Yes')
        set('otherExpensesDetails', 'otherExpensesDetails')
        set('otherExpensesMonthly', 'otherExpensesMonthly')
        //when
        var vm = {};
        otherExpenses.updateVm(vm);
        //then
        expect(vm.televisionSubscription).toEqual('televisionSubscription');
        expect(vm.telephone).toEqual('telephone');
        expect(vm.loanRepayments).toEqual('loanRepayments');
        expect(vm.countyCourtOrders).toEqual('countyCourtOrders');
        expect(vm.fines).toEqual('fines');
        expect(vm.childMaintenance).toEqual('childMaintenance');
        expect(vm.otherExpenses).toEqual('Yes');
        expect(vm.otherExpensesDetails).toEqual('otherExpensesDetails');
        expect(vm.otherExpensesMonthly).toEqual('otherExpensesMonthly');
      })
    });
  });
})();