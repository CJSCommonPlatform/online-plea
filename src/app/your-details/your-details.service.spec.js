(function() {
  'use strict';

  describe('service yourDetails', function() {
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

      it('should update sessionStorage with data from vm', function() {
        //given
        var vm = {
          title: 'title',
          firstName: 'firstName',
          lastName: 'lastName',
          addressStreet: 'addressStreet',
          addressCity: 'addressCity',
          addressPostcode: 'addressPostcode',
          detailsCorrect: 'No',
          yourUpdateDetails: 'yourUpdateDetails',
          contactNumber: 'contactNumber',
          emailAddress: 'emailAddress',
          dateOfBirthDay: 'dateOfBirthDay',
          dateOfBirthMonth: 'dateOfBirthMonth',
          dateOfBirthYear: 'dateOfBirthYear',
          nationalInsurance: 'Yes',
          nationalInsuranceNumber: 'nationalInsuranceNumber'
        }
        //when
        yourDetails.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourDetails.');
        expect(get('title')).toEqual('title');
        expect(get('firstName')).toEqual('firstName');
        expect(get('lastName')).toEqual('lastName');
        expect(get('address.street')).toEqual('addressStreet');
        expect(get('address.city')).toEqual('addressCity');
        expect(get('address.postcode')).toEqual('addressPostcode');
        expect(get('detailsCorrect')).toEqual('No');
        expect(get('yourUpdateDetails')).toEqual('yourUpdateDetails');
        expect(get('contactNumber')).toEqual('contactNumber');
        expect(get('emailAddress')).toEqual('emailAddress');
        expect(get('dateOfBirthDay')).toEqual('dateOfBirthDay');
        expect(get('dateOfBirthMonth')).toEqual('dateOfBirthMonth');
        expect(get('dateOfBirthYear')).toEqual('dateOfBirthYear');
        expect(get('nationalInsurance')).toEqual('Yes');
        expect(get('nationalInsuranceNumber')).toEqual('nationalInsuranceNumber');
      });
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourDetails.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourDetails.');
        set('title', 'title');
        set('firstName', 'firstName');
        set('lastName', 'lastName');
        set('address.street', 'address.street');
        set('address.city', 'address.city');
        set('address.postcode', 'address.postcode');
        set('detailsCorrect', 'detailsCorrect');
        set('yourUpdateDetails', 'yourUpdateDetails');
        set('contactNumber', 'contactNumber');
        set('emailAddress', 'emailAddress');
        set('dateOfBirthDay', 'dateOfBirthDay');
        set('dateOfBirthMonth', 'dateOfBirthMonth');
        set('dateOfBirthYear', 'dateOfBirthYear');
        set('nationalInsurance', 'nationalInsurance');
        set('nationalInsuranceNumber', 'nationalInsuranceNumber');

        //when
        var vm = {};
        yourDetails.updateVm(vm);
        //then
        expect(vm['title']).toEqual('title');
        expect(vm.firstName).toEqual('firstName');
        expect(vm.lastName).toEqual('lastName');
        expect(vm.addressStreet).toEqual('address.street');
        expect(vm.addressCity).toEqual('address.city');
        expect(vm.addressPostcode).toEqual('address.postcode');
        expect(vm.detailsCorrect).toEqual('detailsCorrect');
        expect(vm.yourUpdateDetails).toEqual('yourUpdateDetails');
        expect(vm.contactNumber).toEqual('contactNumber');
        expect(vm.emailAddress).toEqual('emailAddress');
        expect(vm.dateOfBirthDay).toEqual('dateOfBirthDay');
        expect(vm.dateOfBirthMonth).toEqual('dateOfBirthMonth');
        expect(vm.dateOfBirthYear).toEqual('dateOfBirthYear');
        expect(vm.nationalInsurance).toEqual('nationalInsurance');
        expect(vm.nationalInsuranceNumber).toEqual('nationalInsuranceNumber');
      });
    });
  });
})();