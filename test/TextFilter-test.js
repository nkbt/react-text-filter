describe('TextFilter', () => {
  const TextFilterInjector = require('inject!../src/TextFilter');
  let debounce, TextFilter;


  beforeEach(() => {
    debounce = jasmine.createSpy('debounce');
  });


  beforeEach(() => TextFilter = TextFilterInjector({
    'lodash.debounce': debounce
  }));


  it('should be ok', () => {
    expect(TextFilter).toBeTruthy();
  });
});
