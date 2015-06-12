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
    return {
      filter: '',
      minLength: 2,
      debounceTimeout: 300
    };
  },

  onChangeDebounceTimeout: function onChangeDebounceTimeout(_ref) {
    var value = _ref.target.value;

    this.setState({ debounceTimeout: parseInt(value, 10) });
  },

  onChangeMaxLength: function onChangeMaxLength(_ref2) {
    var value = _ref2.target.value;

    this.setState({ minLength: parseInt(value, 10) });
  },

  render: function render() {
    var _this = this;

    var filteredFruits = this.state.filter ? fruits.filter(fruitFilter(this.state.filter)) : fruits.slice(0);

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Customize'
        ),
        'minLength: ',
        _react2['default'].createElement('input', { type: 'number', step: 1, min: 0, max: 10,
          value: this.state.minLength, onChange: this.onChangeMaxLength }),
        '  debounceTimeout: ',
        _react2['default'].createElement('input', { type: 'number', step: 100, min: 0, max: 1000,
          value: this.state.debounceTimeout, onChange: this.onChangeDebounceTimeout })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Test'
        ),
        _react2['default'].createElement(_ReactTextFilterJs2['default'], {
          minLength: this.state.minLength,
          debounceTimeout: this.state.debounceTimeout,
          onFilter: function (filter) {
            return _this.setState({ filter: filter });
          } }),
        _react2['default'].createElement(List, { items: filteredFruits })
      )
    );
  }
});

_react2['default'].render(_react2['default'].createElement(App, null), document.body);
//# sourceMappingURL=example.js.map