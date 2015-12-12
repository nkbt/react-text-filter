import React from 'react';
import TextFilter from '../TextFilter';
import List from './List';


const fruits = [
  'apple',
  'orange',
  'banana',
  'kiwi',
  'pineapple',
  'golden kiwi',
  'green apple'
];


const fruitFilter = filter => fruit => fruit.toLowerCase().indexOf(filter.toLowerCase()) !== -1;


const App = React.createClass({
  getInitialState() {
    return {
      filter: '',
      minLength: 2,
      debounceTimeout: 300
    };
  },


  onChangeDebounceTimeout({target: {value}}) {
    this.setState({debounceTimeout: parseInt(value, 10)});
  },


  onChangeMaxLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  render() {
    const filteredFruits = this.state.filter ?
      fruits.filter(fruitFilter(this.state.filter)) :
      fruits.slice(0);

    return (
      <div>
        <h1>TextFilter</h1>

        <div>
          <h2>Customize</h2>
          minLength:&nbsp;
          <input type="number" step={1} min={0} max={10}
            value={this.state.minLength} onChange={this.onChangeMaxLength} />&nbsp;
          debounceTimeout:&nbsp;
          <input type="number" step={100} min={0} max={1000}
            value={this.state.debounceTimeout} onChange={this.onChangeDebounceTimeout} />
        </div>

        <div>
          <h2>Test</h2>
          <TextFilter
            minLength={this.state.minLength}
            debounceTimeout={this.state.debounceTimeout}
            onFilter={filter => this.setState({filter})} />
          <List items={filteredFruits} />
        </div>
      </div>
    );
  }
});


export default App;
