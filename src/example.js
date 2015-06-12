import React from 'react';
const {PropTypes} = React;
import TextFilter from './ReactTextFilter.js';


const Item = React.createClass({
  propTypes: {
    item: PropTypes.string.isRequired
  },


  render() {
    return <li>{this.props.item}</li>;
  }
});


const List = React.createClass({
  propTypes: {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  },


  render() {
    const Items = this.props.items.map(item => <Item key={item} item={item} />);

    return <ul>{Items}</ul>;
  }
});


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


React.render(<App />, document.body);
