 describe('Should take you to the previous page', function (){

  var scope, elem, compiled;

  beforeEach(module(
    'pleaApp'
  ));

  beforeEach(inject(function ($injector) {
    $window     = $injector.get('$window');
    $compile    = $injector.get('$compile');
    $rootScope  = $injector.get('$rootScope');
    scope       = $rootScope.$new();
    elem        = angular.element('<a class="link-back" href="" data-ng-click="vm.goBack()" title="Go back to previous page">Back</a>');
    compiled    = $compile(elem);
    compiled(scope);
    scope.$digest();

  }));

  it('should call history.back when a back link is clicked', function () {
    spyOn($window.history, 'back');
    elem[0].click();
    expect($window.history.back).toHaveBeenCalled();
  });

});