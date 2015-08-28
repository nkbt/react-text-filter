# react-text-filter

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-text-filter.svg?style=svg)](https://circleci.com/gh/nkbt/react-text-filter)
[![Coverage Status](https://coveralls.io/repos/github/nkbt/react-text-filter/badge.svg?branch=master)](https://coveralls.io/github/nkbt/react-text-filter?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-text-filter.svg)](https://david-dm.org/nkbt/react-text-filter)
[![devDependency Status](https://david-dm.org/nkbt/react-text-filter/dev-status.svg)](https://david-dm.org/nkbt/react-text-filter#info=devDependencies)

React component that renders filtering Input


![Text Filter](https://cdn.rawgit.com/nkbt/react-text-filter/master/src/example/react-text-filter.gif)



## Installation

### npm

```sh
npm install --save react-text-filter
```

### bower

Coming soon


## Demo

[http://nkbt.github.io/react-text-filter/example](http://nkbt.github.io/react-text-filter/example)


## Usage
```js
import React from 'react';
const {PropTypes} = React;
import TextFilter from 'react-text-filter';


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


  render() {
    const filteredFruits = this.state.filter ?
      fruits.filter(fruitFilter(this.state.filter)) :
      fruits.slice(0);

    return (
      <div>
        <TextFilter onFilter={filter => this.setState({filter})} />
        <List items={filteredFruits} />
      </div>
    );
  }
});


React.render(<App />, document.body);
```


## Options


#### `onFilter`: PropTypes.func.isRequired

Function called when filter is changed (debounced)


#### `filter`: PropTypes.string (default: '')

Initial filter value


#### `minLength`: PropTypes.number (default: 2)

Minimal length of text to start notify


#### `debounceTimeout`: PropTypes.number (default: 100)

Notification debounce timeout in ms


## Development and testing

```bash
npm install
npm start
```

Then 

```bash
open http://localhost:8080
```

## License

MIT
