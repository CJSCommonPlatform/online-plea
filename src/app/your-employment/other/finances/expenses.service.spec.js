(function() {
  'use strict';

  describe('service expenses', function() {
    var expenses;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_expenses_, _sessionStorage_) {
      expenses = _expenses_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(expenses).not.toEqual(null);
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(expenses.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourEmployment.');
        set('financialProblems', 'Yes');
        //when
        var vm = {};
        expenses.updateVm(vm);
        //then
        expect(vm.financialProblems).toEqual('Yes');
      });
    });
  });
})();