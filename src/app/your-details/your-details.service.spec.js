(function() {
  'use strict';

  fdescribe('service yourDetails', function() {
    var yourDetails;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourDetails_, _sessionStorage_) {
      yourDetails = _yourDetails_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(yourDetails).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(yourDetails.updateSessionStorage).not.toEqual(null);
      });
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourDetails.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourDetails.');
        set('personalTitle', 'personalTitle');
        set('firstName', 'firstName');
        set('lastName', 'lastName');
        set('address.street', 'address.street');
        set('address.city', 'address.city');
        set('address.postcode', 'address.postcode');
        set('detailsCorrect', 'detailsCorrect');
        set('update', 'update');
        set('contactNumber', 'contactNumber');
        set('dateOfBirthDay', 'dateOfBirthDay');
        set('dateOfBirthMonth', 'dateOfBirthMonth');
        set('dateOfBirthYear', 'dateOfBirthYear');
        set('nationalInsurance', 'nationalInsurance');
        set('nationalInsuranceNumber', 'nationalInsuranceNumber');

        //when
        var vm = {};
        yourDetails.updateVm(vm);
        //then
        expect(vm.personalTitle).toEqual('personalTitle');
        expect(vm.firstName).toEqual('firstName');
        expect(vm.lastName).toEqual('lastName');
        expect(vm.addressStreet).toEqual('address.street');
        expect(vm.addressCity).toEqual('address.city');
        expect(vm.addressPostcode).toEqual('address.postcode');
        expect(vm.detailsCorrect).toEqual('detailsCorrect');
        expect(vm.update).toEqual('update');
        expect(vm.contactNumber).toEqual('contactNumber');
        expect(vm.dateOfBirthDay).toEqual('dateOfBirthDay');
        expect(vm.dateOfBirthMonth).toEqual('dateOfBirthMonth');
        expect(vm.dateOfBirthYear).toEqual('dateOfBirthYear');
        expect(vm.nationalInsurance).toEqual('nationalInsurance');
        expect(vm.nationalInsuranceNumber).toEqual('nationalInsuranceNumber');
      });
    });
  });
})();