describe('Filter: replaceSpaces', function (){

  var filter;

  beforeEach(module('pleaApp'));

  beforeEach(inject(function ($injector) {
    filter = $injector.get('$filter');
  }));


  //Inject $filter and then call it with $filter('filterName')(input, options);
  it('should replace spaces into hypens', function() {
    expect(filter('replaceSpaces')('your employment')).toBe('your-employment');
    expect(filter('replaceSpaces')('employed receiving benefits')).toBe('employed-receiving-benefits');
  });

  it('should replace uppercase into lowercase', function() {
    expect(filter('replaceSpaces')('Your Benefits')).toBe('your-benefits');
    expect(filter('replaceSpaces')('employed Receiving benefits')).toBe('employed-receiving-benefits');
  });

});