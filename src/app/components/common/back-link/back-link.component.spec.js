describe('Should take you to the previous page', function (){

  var scope, elem, compiled, backLink;

  beforeEach(module(
    'pleaApp'
  ));

  beforeEach(inject(function ($injector) {
    $window     = $injector.get('$window');
    $compile    = $injector.get('$compile');
    $rootScope  = $injector.get('$rootScope');
    scope       = $rootScope.$new();
    elem        = angular.element('<back-link></back-link>');
    compiled    = $compile(elem)(scope);
    scope.$digest();
    backLink = elem.find('a');
  }));

  it('should have back-link anchor', function() {
    expect(backLink).toBeDefined();
    expect(backLink.hasClass('link-back')).toBe(true);
  });

  it('should call history.back when a back link is clicked', function () {
    spyOn($window.history, 'back');
    backLink.click();
    expect($window.history.back).toHaveBeenCalled();
  });
});