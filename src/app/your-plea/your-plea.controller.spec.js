(function() {

  'use strict';

  describe('YourPleaController', function(){
    var vm;
    var scope;
    var $controller;
    var event;
    var $state;
    var pleas;
    var yesNoAnswer;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _pleas_, _yesNoAnswer_, _sessionStorage_) {
      scope = $rootScope.$new();
      $controller = _$controller_;
      vm = _$controller_('YourPleaController');
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
      pleas = _pleas_;
      yesNoAnswer = _yesNoAnswer_;
      sessionStorage = _sessionStorage_;

      $state.go('your-plea');
      scope.$apply();
    }));

    it('should preventDefault on the event after continue', function() {
      //given
      vm.plea = pleas.NOT_GUILTY;
      //when
      vm.buttonContinue(event);
      //then
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should change state after continue; GUILTY', function() {
      //given
      expect($state.current.name).toEqual('your-plea');
      //when
      vm.plea = pleas.GUILTY;
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-employment');
    });

    it('should change state after continue; NOT_GUILTY', function() {
      //given
      expect($state.current.name).toEqual('your-plea');
      //when
      vm.plea = pleas.NOT_GUILTY;
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('confirm-plea');
    });

    it('should update vm; GUILTY', function() {
      //given
      var PLEA = pleas.GUILTY;
      var COURT = 'Court';
      var MITIGATION = 'Mitigation';
      var set = sessionStorage.getSetter('pleaApp.yourPlea.');
      set('plea', PLEA);
      set('court', COURT);
      set('mitigation', MITIGATION);
      //when
      var vm = $controller('YourPleaController');
      //then
      expect(vm.plea).toEqual(PLEA);
      expect(vm.court).toEqual(COURT);
      expect(vm.mitigation).toEqual(MITIGATION);
    });

    it('should update vm; NOT_GUILTY', function() {
      //given
      var PLEA = pleas.NOT_GUILTY;
      var NOT_GUILTY_BECAUSE = 'Not guilty because';
      var INTERPRETER = yesNoAnswer.YES;
      var INTERPRETER_LANGUAGE = 'Interpreter Language';
      var PROSECUTOR_WITNESS_DISAGREE = yesNoAnswer.YES;
      var PROSECUTOR_WITNESS_DETAILS = 'Prosecutor Witness Details';
      var DEFENCE_WITNESS_CALL = yesNoAnswer.YES;
      var DEFENCE_WITNESS_CONTACT_DETAILS = 'Defence Witness Contact Details';
      var DEFENCE_WITNESS_INTERPRETER = yesNoAnswer.YES;
      var DEFENCE_WITNESS_INTERPRETER_LANGUAGE = 'Defence Witness Interpreter Language';
      var set = sessionStorage.getSetter('pleaApp.yourPlea.');
      set('plea', PLEA);
      set('notGuiltyBecause', NOT_GUILTY_BECAUSE);
      set('interpreter', INTERPRETER);
      set('interpreterLanguage', INTERPRETER_LANGUAGE);
      set('prosecutorWitnessDisagree', PROSECUTOR_WITNESS_DISAGREE);
      set('prosecutorWitnessDetails', PROSECUTOR_WITNESS_DETAILS);
      set('defenceWitnessCall', DEFENCE_WITNESS_CALL);
      set('defenceWitnessContactDetails', DEFENCE_WITNESS_CONTACT_DETAILS);
      set('defenceWitnessInterpreter', DEFENCE_WITNESS_INTERPRETER);
      set('defenceWitnessInterpreterLanguage', DEFENCE_WITNESS_INTERPRETER_LANGUAGE);
      //when
      var vm = $controller('YourPleaController');
      //then
      expect(vm.plea).toEqual(PLEA);
      expect(vm.notGuiltyBecause).toEqual(NOT_GUILTY_BECAUSE);
      expect(vm.interpreter).toEqual(INTERPRETER);
      expect(vm.interpreterLanguage).toEqual(INTERPRETER_LANGUAGE);
      expect(vm.prosecutorWitnessDisagree).toEqual(PROSECUTOR_WITNESS_DISAGREE);
      expect(vm.prosecutorWitnessDetails).toEqual(PROSECUTOR_WITNESS_DETAILS);
      expect(vm.defenceWitnessCall).toEqual(DEFENCE_WITNESS_CALL);
      expect(vm.defenceWitnessContactDetails).toEqual(DEFENCE_WITNESS_CONTACT_DETAILS);
      expect(vm.defenceWitnessInterpreter).toEqual(DEFENCE_WITNESS_INTERPRETER);
      expect(vm.defenceWitnessInterpreterLanguage).toEqual(DEFENCE_WITNESS_INTERPRETER_LANGUAGE);
    });

    it('should store vm values into sessionStorage; GUILTY', function() {
      //given
      var PLEA = pleas.GUILTY;
      var COURT = 'Court';
      var MITIGATION = 'Mitigation';
      //when
      vm.plea = PLEA;
      vm.court = COURT;
      vm.mitigation = MITIGATION;
      vm.buttonContinue(event);
      //then
      var get = sessionStorage.getGetter('pleaApp.yourPlea.');
      expect(get('plea')).toEqual(PLEA);
      expect(get('court')).toEqual(COURT);
      expect(get('mitigation')).toEqual(MITIGATION);
    });

    it('should store vm values into sessionStorage; NOT_GUILTY and YES answers', function() {
      //given
      var PLEA = pleas.NOT_GUILTY;
      var NOT_GUILTY_BECAUSE = 'Not guilty because';
      var INTERPRETER = yesNoAnswer.YES;
      var INTERPRETER_LANGUAGE = 'Interpreter Language';
      var PROSECUTOR_WITNESS_DISAGREE = yesNoAnswer.YES;
      var PROSECUTOR_WITNESS_DETAILS = 'Prosecutor Witness Details';
      var DEFENCE_WITNESS_CALL = yesNoAnswer.YES;
      var DEFENCE_WITNESS_CONTACT_DETAILS = 'defenceWitnessContactDetails';
      var DEFENCE_WITNESS_INTERPRETER = yesNoAnswer.YES;
      var DEFENCE_WITNESS_INTERPRETER_LANGUAGE = 'defenceWitnessInterpreterLanguage';
      //when
      vm.plea = PLEA;
      vm.notGuiltyBecause = NOT_GUILTY_BECAUSE;
      vm.interpreter = INTERPRETER;
      vm.interpreterLanguage = INTERPRETER_LANGUAGE;
      vm.prosecutorWitnessDisagree = PROSECUTOR_WITNESS_DISAGREE;
      vm.prosecutorWitnessDetails = PROSECUTOR_WITNESS_DETAILS;
      vm.defenceWitnessCall = DEFENCE_WITNESS_CALL;
      vm.defenceWitnessContactDetails = DEFENCE_WITNESS_CONTACT_DETAILS;
      vm.defenceWitnessInterpreter = DEFENCE_WITNESS_INTERPRETER;
      vm.defenceWitnessInterpreterLanguage = DEFENCE_WITNESS_INTERPRETER_LANGUAGE;
      vm.buttonContinue(event);
      //then
      var get = sessionStorage.getGetter('pleaApp.yourPlea.');
      expect(get('plea')).toEqual(pleas.NOT_GUILTY);
      expect(get('notGuiltyBecause')).toEqual(NOT_GUILTY_BECAUSE);
      expect(get('interpreter')).toEqual(INTERPRETER);
      expect(get('interpreterLanguage')).toEqual(INTERPRETER_LANGUAGE);
      expect(get('prosecutorWitnessDisagree')).toEqual(PROSECUTOR_WITNESS_DISAGREE);
      expect(get('prosecutorWitnessDetails')).toEqual(PROSECUTOR_WITNESS_DETAILS);
      expect(get('defenceWitnessCall')).toEqual(DEFENCE_WITNESS_CALL);
      expect(get('defenceWitnessContactDetails')).toEqual(DEFENCE_WITNESS_CONTACT_DETAILS);
      expect(get('defenceWitnessInterpreter')).toEqual(DEFENCE_WITNESS_INTERPRETER);
      expect(get('defenceWitnessInterpreterLanguage')).toEqual(DEFENCE_WITNESS_INTERPRETER_LANGUAGE);
    });

    it('should store vm values into sessionStorage; NOT_GUILTY and NO answers', function() {
      //given
      var PLEA = pleas.NOT_GUILTY;
      var NOT_GUILTY_BECAUSE = 'Not guilty because';
      var INTERPRETER = yesNoAnswer.NO;
      var INTERPRETER_LANGUAGE = 'Interpreter Language';
      var PROSECUTOR_WITNESS_DISAGREE = yesNoAnswer.NO;
      var PROSECUTOR_WITNESS_DETAILS = 'Prosecutor Witness Details';
      var DEFENCE_WITNESS_CALL = yesNoAnswer.NO;
      var DEFENCE_WITNESS_CONTACT_DETAILS = 'defenceWitnessContactDetails';
      var DEFENCE_WITNESS_INTERPRETER = yesNoAnswer.YES;
      var DEFENCE_WITNESS_INTERPRETER_LANGUAGE = 'defenceWitnessInterpreterLanguage';
      //when
      vm.plea = PLEA;
      vm.notGuiltyBecause = NOT_GUILTY_BECAUSE;
      vm.interpreter = INTERPRETER;
      vm.interpreterLanguage = INTERPRETER_LANGUAGE;
      vm.prosecutorWitnessDisagree = PROSECUTOR_WITNESS_DISAGREE;
      vm.prosecutorWitnessDetails = PROSECUTOR_WITNESS_DETAILS;
      vm.defenceWitnessCall = DEFENCE_WITNESS_CALL;
      vm.defenceWitnessContactDetails = DEFENCE_WITNESS_CONTACT_DETAILS;
      vm.defenceWitnessInterpreter = DEFENCE_WITNESS_INTERPRETER;
      vm.defenceWitnessInterpreterLanguage = DEFENCE_WITNESS_INTERPRETER_LANGUAGE;
      vm.buttonContinue(event);
      //then
      var get = sessionStorage.getGetter('pleaApp.yourPlea.');
      expect(get('plea')).toEqual(pleas.NOT_GUILTY);
      expect(get('notGuiltyBecause')).toEqual(NOT_GUILTY_BECAUSE);
      expect(get('interpreter')).toEqual(INTERPRETER);
      expect(get('interpreterLanguage')).toEqual(undefined);
      expect(get('prosecutorWitnessDisagree')).toEqual(PROSECUTOR_WITNESS_DISAGREE);
      expect(get('prosecutorWitnessDetails')).toEqual(undefined);
      expect(get('defenceWitnessCall')).toEqual(DEFENCE_WITNESS_CALL);
      expect(get('defenceWitnessContactDetails')).toEqual(undefined);
      expect(get('defenceWitnessInterpreter')).toEqual(undefined);
      expect(get('defenceWitnessInterpreterLanguage')).toEqual(undefined);
    });

    it('should store vm values into sessionStorage; NOT_GUILTY and NO defence witness interpreter', function() {
      //given
      var PLEA = pleas.NOT_GUILTY;
      var NOT_GUILTY_BECAUSE = 'Not guilty because';
      var INTERPRETER = yesNoAnswer.YES;
      var INTERPRETER_LANGUAGE = 'Interpreter Language';
      var PROSECUTOR_WITNESS_DISAGREE = yesNoAnswer.YES;
      var PROSECUTOR_WITNESS_DETAILS = 'Prosecutor Witness Details';
      var DEFENCE_WITNESS_CALL = yesNoAnswer.YES;
      var DEFENCE_WITNESS_CONTACT_DETAILS = 'defenceWitnessContactDetails';
      var DEFENCE_WITNESS_INTERPRETER = yesNoAnswer.NO;
      var DEFENCE_WITNESS_INTERPRETER_LANGUAGE = 'defenceWitnessInterpreterLanguage';
      //when
      vm.plea = PLEA;
      vm.notGuiltyBecause = NOT_GUILTY_BECAUSE;
      vm.interpreter = INTERPRETER;
      vm.interpreterLanguage = INTERPRETER_LANGUAGE;
      vm.prosecutorWitnessDisagree = PROSECUTOR_WITNESS_DISAGREE;
      vm.prosecutorWitnessDetails = PROSECUTOR_WITNESS_DETAILS;
      vm.defenceWitnessCall = DEFENCE_WITNESS_CALL;
      vm.defenceWitnessContactDetails = DEFENCE_WITNESS_CONTACT_DETAILS;
      vm.defenceWitnessInterpreter = DEFENCE_WITNESS_INTERPRETER;
      vm.defenceWitnessInterpreterLanguage = DEFENCE_WITNESS_INTERPRETER_LANGUAGE;
      vm.buttonContinue(event);
      //then
      var get = sessionStorage.getGetter('pleaApp.yourPlea.');
      expect(get('plea')).toEqual(pleas.NOT_GUILTY);
      expect(get('notGuiltyBecause')).toEqual(NOT_GUILTY_BECAUSE);
      expect(get('interpreter')).toEqual(INTERPRETER);
      expect(get('interpreterLanguage')).toEqual(INTERPRETER_LANGUAGE);
      expect(get('prosecutorWitnessDisagree')).toEqual(PROSECUTOR_WITNESS_DISAGREE);
      expect(get('prosecutorWitnessDetails')).toEqual(PROSECUTOR_WITNESS_DETAILS);
      expect(get('defenceWitnessCall')).toEqual(DEFENCE_WITNESS_CALL);
      expect(get('defenceWitnessContactDetails')).toEqual(DEFENCE_WITNESS_CONTACT_DETAILS);
      expect(get('defenceWitnessInterpreter')).toEqual(DEFENCE_WITNESS_INTERPRETER);
      expect(get('defenceWitnessInterpreterLanguage')).toEqual(undefined);
    });

    it('should reset values from sessionStorage; NOT_GUILTY', function() {
      //given
      var set = sessionStorage.getSetter('pleaApp.');
      set('yourEmployment.foo', 'bar');
      set('yourExpenses.foo', 'bar');
      set('yourBenefits.foo', 'bar');
      var PLEA = pleas.NOT_GUILTY;
      //when
      vm.plea = PLEA;
      vm.buttonContinue(event);
      //then
      var get = sessionStorage.getGetter('pleaApp.');
      expect(get('yourPlea.plea')).toEqual(PLEA);
      expect(get('yourEmployment.foo')).toEqual(undefined);
      expect(get('yourExpenses.foo')).toEqual(undefined);
      expect(get('yourBenefits.foo')).toEqual(undefined);
    });
  });

})();
