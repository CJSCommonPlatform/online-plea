describe('component: fieldsetLegend', function (){

  var scope, rootScope, componentController;

  beforeEach(module('pleaApp'));

  // beforeEach(inject(function ($injector) {
  //   compile    = $injector.get('$compile');
  //   controller  = $injector.get('$controller');
  //   rootScope  = $injector.get('$rootScope');
  //   scope      = rootScope.$new();
  //   elem       = angular.element('<fieldset-legend ' +
  //                                 'data-base-id="dob" ' +
  //                                 'data-label="Your date of birth" ' +
  //                                 'data-hint="Eg 31 3 1980" ' +
  //                                 'data-form-field="vm.form[\'dob-day\']" ' +
  //                                 'data-error-messages="[ ' +
  //                                   '{name: \'allRequired\', text: \'provide this information\'},' +
  //                                   '{name: \'invalidDayOfMonth\', text: \'Date doesn&rsquo;t exist &ndash; enter again\'},' +
  //                                   '{name: \'invalidMonth\',text: \'Date doesn&rsquo;t exist &ndash; enter again\'},' +
  //                                   '{name: \'inFuture\',text: \'Date can&rsquo;t be in future &ndash; enter valid date\'}' +
  //                                 ']">');
  //   controller = elem.controller('fieldsetLegend');
  //   compile(elem)(scope);
  //   scope.$digest();
  // }));

  beforeEach(inject(function ($injector) {
    rootScope             = $injector.get('$rootScope');
    componentController   = $injector.get('$componentController');
    scope                 = rootScope.$new();
    baseId                = 'testId';
    label                 = 'testLabel';
    hint                  = 'testHint';
    formField             = {firstName: 'Paul'};
    errorMessages         = {name: 'allRequired', text: 'Provide this information'};
  }));

  it('should have bindings bound', function() {
    component = componentController('fieldsetLegend',
      null,
      {baseId: baseId, label: label, hint: hint, formField: formField, errorMessages: errorMessages}
    );

    expect(component.baseId).toBe('testId');
    expect(component.label).toBe('testLabel');
    expect(component.hint).toBe('testHint');
    expect(component.formField.firstName).toBe('Paul');
    expect(component.errorMessages.name).toBe('allRequired');
    expect(component.errorMessages.text).toBe('Provide this information');
  });

});