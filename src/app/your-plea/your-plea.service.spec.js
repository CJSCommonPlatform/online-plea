(function() {
  'use strict';

  describe('service yourPlea', function() {
    var yourPlea;
    var sessionStorage;
    var pleas;
    var yesNoAnswer;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourPlea_, _sessionStorage_, _pleas_, _yesNoAnswer_) {
      yourPlea = _yourPlea_;
      sessionStorage = _sessionStorage_;
      pleas = _pleas_;
      yesNoAnswer = _yesNoAnswer_;
    }));

    it('should be registered', function() {
      expect(yourPlea).not.toEqual(null);
    });

    describe('updateSessionStorage function', function() {
      it('should exist', function() {
        expect(yourPlea.updateSessionStorage).not.toEqual(null);
      });

      it('should update sessionStorage with data from vm; plea=GUILTY', function() {
        //given
        var vm = {
          plea: pleas.GUILTY,
          court: 'court',
          mitigation: 'mitigation',
        }
        //when
        yourPlea.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourPlea.');
        expect(get('plea')).toEqual(pleas.GUILTY);
        expect(get('court')).toEqual('court');
        expect(get('mitigation')).toEqual('mitigation');
      });

      it('should update sessionStorage with data from vm; plea=NOT_GUILTY; YES', function() {
        //given
        sessionStorage.getSetter('pleaApp.yourEmployment.')('foo', 'bar');
        sessionStorage.getSetter('pleaApp.yourExpenses.')('foo', 'bar');
        sessionStorage.getSetter('pleaApp.yourBenefits.')('foo', 'bar');
        var vm = {
          plea: pleas.NOT_GUILTY,
          notGuiltyBecause: 'notGuiltyBecause',
          interpreter: yesNoAnswer.YES,
          interpreterLanguage: 'interpreterLanguage',
          prosecutorWitnessDisagree: yesNoAnswer.YES,
          prosecutorWitnessDetails: 'prosecutorWitnessDetails',
          defenceWitnessCall: yesNoAnswer.YES,
          defenceWitnessContactDetails: 'defenceWitnessContactDetails',
          defenceWitnessInterpreter: yesNoAnswer.YES,
          defenceWitnessInterpreterLanguage: 'defenceWitnessInterpreterLanguage'
        }
        //when
        yourPlea.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourPlea.');
        expect(get('plea')).toEqual(pleas.NOT_GUILTY);
        expect(get('notGuiltyBecause')).toEqual('notGuiltyBecause');
        expect(get('interpreter')).toEqual(yesNoAnswer.YES);
        expect(get('interpreterLanguage')).toEqual('interpreterLanguage');
        expect(get('prosecutorWitnessDisagree')).toEqual(yesNoAnswer.YES);
        expect(get('prosecutorWitnessDetails')).toEqual('prosecutorWitnessDetails');
        expect(get('defenceWitnessCall')).toEqual(yesNoAnswer.YES);
        expect(get('defenceWitnessContactDetails')).toEqual('defenceWitnessContactDetails');
        expect(get('defenceWitnessInterpreter')).toEqual(yesNoAnswer.YES);
        expect(get('defenceWitnessInterpreterLanguage')).toEqual('defenceWitnessInterpreterLanguage');
        expect(sessionStorage.getGetter('pleaApp.yourEmployment.')('')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourExpenses.')('')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourBenefits.')('')).not.toBeDefined();
      });

      it('should update sessionStorage with data from vm; plea=NOT_GUILTY; NO', function() {
        //given
        sessionStorage.getSetter('pleaApp.yourEmployment.')('foo', 'bar');
        sessionStorage.getSetter('pleaApp.yourExpenses.')('foo', 'bar');
        sessionStorage.getSetter('pleaApp.yourBenefits.')('foo', 'bar');
        var vm = {
          plea: pleas.NOT_GUILTY,
          notGuiltyBecause: 'notGuiltyBecause',
          interpreter: yesNoAnswer.NO,
          interpreterLanguage: 'interpreterLanguage',
          prosecutorWitnessDisagree: yesNoAnswer.NO,
          prosecutorWitnessDetails: 'prosecutorWitnessDetails',
          defenceWitnessCall: yesNoAnswer.NO,
          defenceWitnessContactDetails: 'defenceWitnessContactDetails',
          defenceWitnessInterpreter: yesNoAnswer.NO,
          defenceWitnessInterpreterLanguage: 'defenceWitnessInterpreterLanguage'
        }
        //when
        yourPlea.updateSessionStorage(vm);
        //then
        var get = sessionStorage.getGetter('pleaApp.yourPlea.');
        expect(get('plea')).toEqual(pleas.NOT_GUILTY);
        expect(get('notGuiltyBecause')).toEqual('notGuiltyBecause');
        expect(get('interpreter')).toEqual(yesNoAnswer.NO);
        expect(get('interpreterLanguage')).not.toBeDefined();
        expect(get('prosecutorWitnessDisagree')).toEqual(yesNoAnswer.NO);
        expect(get('prosecutorWitnessDetails')).not.toBeDefined();
        expect(get('defenceWitnessCall')).toEqual(yesNoAnswer.NO);
        expect(get('defenceWitnessContactDetails')).not.toBeDefined();
        expect(get('defenceWitnessInterpreter')).not.toBeDefined();
        expect(get('defenceWitnessInterpreterLanguage')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourEmployment.')('')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourExpenses.')('')).not.toBeDefined();
        expect(sessionStorage.getGetter('pleaApp.yourBenefits.')('')).not.toBeDefined();
      });
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourPlea.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage; otherExpenses=Yes', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.yourPlea.');
        set('plea', 'plea');
        set('court', 'court')
        set('mitigation', 'mitigation')
        set('notGuiltyBecause', 'notGuiltyBecause')
        set('interpreter', 'interpreter')
        set('interpreterLanguage', 'interpreterLanguage')
        set('prosecutorWitnessDisagree', 'prosecutorWitnessDisagree')
        set('prosecutorWitnessDetails', 'prosecutorWitnessDetails')
        set('defenceWitnessCall', 'defenceWitnessCall')
        set('defenceWitnessContactDetails', 'defenceWitnessContactDetails')
        set('defenceWitnessInterpreter', 'defenceWitnessInterpreter')
        set('defenceWitnessInterpreterLanguage', 'defenceWitnessInterpreterLanguage')
        //when
        var vm = {};
        yourPlea.updateVm(vm);
        //then
        expect(vm.plea).toEqual('plea');
        expect(vm.court).toEqual('court');
        expect(vm.mitigation).toEqual('mitigation');
        expect(vm.notGuiltyBecause).toEqual('notGuiltyBecause');
        expect(vm.interpreter).toEqual('interpreter');
        expect(vm.interpreterLanguage).toEqual('interpreterLanguage');
        expect(vm.prosecutorWitnessDisagree).toEqual('prosecutorWitnessDisagree');
        expect(vm.prosecutorWitnessDetails).toEqual('prosecutorWitnessDetails');
        expect(vm.defenceWitnessCall).toEqual('defenceWitnessCall');
        expect(vm.defenceWitnessContactDetails).toEqual('defenceWitnessContactDetails');
        expect(vm.defenceWitnessInterpreter).toEqual('defenceWitnessInterpreter');
        expect(vm.defenceWitnessInterpreterLanguage).toEqual('defenceWitnessInterpreterLanguage');
      })
    });
  });
})();