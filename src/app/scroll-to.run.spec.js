 describe('Scrolling to Top', function (){
  var $rootScope, $window, $location;

  beforeEach(module(
    'pleaApp'
  ));

  beforeEach(inject(function ($injector) {
    $rootScope	= $injector.get('$rootScope');
    $location		= $injector.get('$location');
    $window			= $injector.get('$window');
  }));

  it('Should scroll to the top on $stateChangeSuccess', function (){
    $location.path('/your-details');
    $rootScope.$apply();
    expect($window.scrollX).toEqual(0);
    expect($window.scrollY).toEqual(0);
  });

});
