# react-text-filter

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

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


### Bower:
```sh
bower install --save https://npmcdn.com/react-text-filter/build/react-text-filter.js
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-text-filter": "https://npmcdn.com/react-text-filter/build/react-text-filter.js"
  }
}
```

then include as
```html
<script src="bower_components/react-text-filter/index.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react-text-filter/build/react-text-filter.js"></script>
(Module exposed as `TextFilter`)
```


## Demo

[http://nkbt.github.io/react-text-filter/example](http://nkbt.github.io/react-text-filter/example)

## Codepen demo

[http://codepen.io/nkbt/pen/gPaZvQ](http://codepen.io/nkbt/pen/gPaZvQ?editors=001)

## Usage
```js
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
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
        <TextFilter onFilter={({target: {value: filter}}) => this.setState({filter})} />
        <List items={filteredFruits} />
      </div>
    );
  }
});

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options


#### `onFilter`: PropTypes.func.isRequired

Function called when filter is changed (debounced) with original event passed through


#### `filter`: PropTypes.string (default: '')

Initial filter value


#### `minLength`: PropTypes.number (default: 2)

Minimal length of text to start notify


#### `debounceTimeout`: PropTypes.number (default: 300)

Notification debounce timeout in ms


## Development and testing

To run example covering all `TextFilter` features, use `npm start`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-text-filter.git
cd react-text-filter
npm install
npm start

# then
open http://localhost:8080
```

## Tests

```bash
npm test

# to run tests in watch mode for development
npm run test:dev

# to generate test coverage (./reports/coverage)
npm run test:cov
```

## License

MIT
