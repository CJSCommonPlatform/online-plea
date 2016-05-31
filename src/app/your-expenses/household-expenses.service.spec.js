(function() {
  'use strict';

  describe('service householdExpenses', function() {
    var householdExpenses;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_householdExpenses_, _sessionStorage_) {
      householdExpenses = _householdExpenses_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(householdExpenses).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(householdExpenses.updateSessionStorage).not.toEqual(null);
      });

      it('should update sessionStorage with data from vm', function() {
        //given
        var vm = {
          accomodation: 'accomodation',
          utilityBills: 'utilityBills',
          insurance: 'insurance',
          councilTax: 'councilTax',
          contribute: 'contribute'
        }
        //when
        householdExpenses.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourExpenses.household.');
        expect(get('accomodation')).toEqual('accomodation');
        expect(get('utilityBills')).toEqual('utilityBills');
        expect(get('insurance')).toEqual('insurance');
        expect(get('councilTax')).toEqual('councilTax');
        expect(get('contribute')).toEqual('contribute');
      })

    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(householdExpenses.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourExpenses.household.');
        set('accomodation', 'accomodation');
        set('utilityBills', 'utilityBills')
        set('insurance', 'insurance')
        set('councilTax', 'councilTax')
        set('contribute', 'contribute')
        //when
        var vm = {};
        householdExpenses.updateVm(vm);
        //then
        expect(vm.accomodation).toEqual('accomodation');
        expect(vm.utilityBills).toEqual('utilityBills');
        expect(vm.insurance).toEqual('insurance');
        expect(vm.councilTax).toEqual('councilTax');
        expect(vm.contribute).toEqual('contribute');
      })
    });
  });
})();