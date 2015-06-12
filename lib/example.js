'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactTextFilterJs = require('./ReactTextFilter.js');

var _ReactTextFilterJs2 = _interopRequireDefault(_ReactTextFilterJs);

var PropTypes = _react2['default'].PropTypes;

var Item = _react2['default'].createClass({
  displayName: 'Item',

  propTypes: {
    item: PropTypes.string.isRequired
  },

  render: function render() {
    return _react2['default'].createElement(
      'li',
      null,
      this.props.item
    );
  }
});

var List = _react2['default'].createClass({
  displayName: 'List',

  propTypes: {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  },

  render: function render() {
    var Items = this.props.items.map(function (item) {
      return _react2['default'].createElement(Item, { key: item, item: item });
    });

    return _react2['default'].createElement(
      'ul',
      null,
      Items
    );
  }
});

var fruits = ['apple', 'orange', 'banana', 'kiwi', 'pineapple', 'golden kiwi', 'green apple'];

var fruitFilter = function fruitFilter(filter) {
  return function (fruit) {
    return fruit.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  };
};

var App = _react2['default'].createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return { filter: '' };
  },

  onFilter: function onFilter(filter) {
    this.setState({ filter: filter });
  },

  fruitFilter: function fruitFilter(filter) {
    return function (rule) {
      return rule.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    };
  },

  render: function render() {
    var filteredFruits = this.state.filter ? fruits.filter(fruitFilter(this.state.filter)) : fruits.slice(0);

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_ReactTextFilterJs2['default'], { onFilter: this.onFilter }),
      _react2['default'].createElement(List, { items: filteredFruits })
    );
  }
});

_react2['default'].render(_react2['default'].createElement(App, null), document.body);
//# sourceMappingURL=example.js.map