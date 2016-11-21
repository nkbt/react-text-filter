import React from 'react';
import Customizable from './Customizable';
import css from './App.css';


const App = () =>
  <div className={css.app}>
    <div>
      <h1>react-text-filter</h1>

      <section className={css.section}>
        <Customizable />
      </section>

    </div>
  </div>;


export default App;
