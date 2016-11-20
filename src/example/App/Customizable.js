import React from 'react';
import {TextFilter} from '../..';


const Item = ({item}) => <li>{item}</li>;

Item.propTypes = {
  item: React.PropTypes.string.isRequired
};


const List = ({items}) => <ul>{items.map(item => <Item key={item} item={item} />)}</ul>;

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};


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


const Customizable = React.createClass({
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


  onChangeMinLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  onFilter({target: {value: filter}}) {
    this.setState({filter});
  },


  render() {
    const {minLength, indefinite, debounceTimeout, filter} = this.state;

    const filteredFruits = filter ?
      fruits.filter(fruitFilter(filter)) :
      fruits.slice(0);

    return (
      <div>
        <h2>Customizable</h2>
        <label>
          Min length [{minLength}]:&nbsp;
          <input
            type="range"
            step={1}
            min={0}
            max={10}
            value={minLength}
            onChange={this.onChangeMinLength} />&nbsp;
        </label>&nbsp;

        <label>
          Debounce timeout [{debounceTimeout}ms]:&nbsp;
          <input
            disabled={indefinite}
            type="range"
            step={100}
            min={0}
            max={1000}
            value={debounceTimeout}
            onChange={this.onChangeDebounceTimeout} />&nbsp;
        </label>&nbsp;

        <h3>Test</h3>
        <TextFilter
          filter={filter}
          minLength={minLength}
          debounceTimeout={debounceTimeout}
          onFilter={this.onFilter} />

        <List items={filteredFruits} />
      </div>
    );
  }
});


export default Customizable;
