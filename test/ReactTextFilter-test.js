describe('ReactTextFilter', () => {
  const ReactTextFilterInjector = require('inject!../src/ReactTextFilter');
  let debounce, ReactTextFilter;


  beforeEach(() => {
    debounce = jasmine.createSpy('debounce');
  });


  beforeEach(() => ReactTextFilter = ReactTextFilterInjector({
    'lodash/function/debounce': debounce
  }));


  it('should be ok', () => {
    expect(ReactTextFilter).toBeTruthy();
  });
});
