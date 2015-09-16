import React from 'react';


describe('TextFilter', () => {
  const TextFilterInjector = require('inject!../src/TextFilter');
  let DebounceInput, TextFilter;


  beforeEach(() => {
    DebounceInput = React.createClass({
      render() {
        return <div>Test</div>;
      }
    });
  });


  beforeEach(() => TextFilter = TextFilterInjector({
    'react-debounce-input': DebounceInput
  }));


  it('should be ok', () => {
    expect(TextFilter).toBeTruthy();
  });
});
