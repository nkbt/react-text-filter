# react-text-filter [![npm](https://img.shields.io/npm/v/react-text-filter.svg?style=flat-square)](https://www.npmjs.com/package/react-text-filter)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-text-filter.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/react-text-filter)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-text-filter.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-text-filter)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-text-filter.svg?style=flat-square)](https://codecov.io/github/nkbt/react-text-filter?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-text-filter.svg?style=flat-square)](https://david-dm.org/nkbt/react-text-filter)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-text-filter.svg?style=flat-square)](https://david-dm.org/nkbt/react-text-filter#info=devDependencies)

React component that renders filtering Input


![Text Filter](https://cdn.rawgit.com/nkbt/react-text-filter/master/src/example/react-text-filter.gif)



## Installation

### NPM
```sh
npm install --save react react-text-filter
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-text-filter/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-text-filter/build/react-text-filter.js"></script>
(Module exposed as `TextFilter`)
```


## Demo

[http://nkbt.github.io/react-text-filter](http://nkbt.github.io/react-text-filter)

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


#### Arbitrary props will be transferred to the rendered `<input>`

```js
<TextFilter
  onFilter={({target: {value: filter}}) => this.setState({filter})}
  placeholder="Filter"
  className="my-filter" />
```

Will result in

```js
<input type="text"
  placeholder="Filter"
  className="my-filter" />
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 5` on `OSX` and `Windows`.

To run example covering all `TextFilter` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-text-filter.git
cd react-text-filter
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
