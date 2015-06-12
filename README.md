# react-text-filter

React component that renders filtering Input


[![Dependency Status](https://david-dm.org/nkbt/react-text-filter.svg)](https://david-dm.org/nkbt/react-text-filter)
[![devDependency Status](https://david-dm.org/nkbt/react-text-filter/dev-status.svg)](https://david-dm.org/nkbt/react-text-filter#info=devDependencies)


## Options


#### `onFilter`: PropTypes.func.isRequired

Function called when filter is changed (debounced)


#### `filter`: PropTypes.string (default: '')

Initial filter value


#### `minLength`: PropTypes.number (default: 2)

Minimal length of text to start notify


#### `debounceTimeout`: PropTypes.number (default: 100)

Notification debounce timeout in ms


## Usage
```js
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
    return {filter: ''};
  },


  onFilter(filter) {
    this.setState({filter});
  },


  fruitFilter(filter) {
    return rule => rule.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  },

  render() {
    const filteredFruits = this.state.filter ?
      fruits.filter(fruitFilter(this.state.filter)) :
      fruits.slice(0);

    return (
      <div>
        <TextFilter onFilter={this.onFilter} />
        <List items={filteredFruits} />
      </div>
    );
  }
});


React.render(<App />, document.body);
```


## Development and testing

```bash
npm install
npm start
```

Then 

```bash
open http://localhost:8080
```

## Demo

[http://nkbt.github.io/react-text-filter/example](http://nkbt.github.io/react-text-filter/example)


## License

MIT
