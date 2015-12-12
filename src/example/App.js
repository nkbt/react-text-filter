import React from 'react';
import Customizable from './Customizable';

const section = {marginBottom: 40};

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>TextFilter</h1>

        <section style={section}>
          <Customizable />
        </section>

      </div>
    );
  }
});

export default App;
