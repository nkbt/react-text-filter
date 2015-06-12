'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _lodashFunctionDebounce = require('lodash/function/debounce');

var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);

var PropTypes = _reactAddons2['default'].PropTypes;
var PureRenderMixin = _reactAddons2['default'].addons.PureRenderMixin;

var ReactTextFilter = _reactAddons2['default'].createClass({
  displayName: 'ReactTextFilter',

  propTypes: {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
    minLength: PropTypes.number,
    debounceTimeout: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      minLength: 2,
      filter: '',
      debounceTimeout: 100
    };
  },

  getInitialState: function getInitialState() {
    return {
      filter: this.props.filter
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    var _PureRenderMixin$shouldComponentUpdate;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_PureRenderMixin$shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate).call.apply(_PureRenderMixin$shouldComponentUpdate, [this].concat(args));
  },

  componentWillUpdate: function componentWillUpdate(_ref, _ref2) {
    var minLength = _ref.minLength;
    var filter = _ref2.filter;
    var oldFilter = this.state.filter;

    if (filter === oldFilter) {
      return;
    }

    if (filter.length >= minLength) {
      this.notify(filter);
      return;
    }

    // If user hits backspace and goes below minLength consider it cleaning the filter
    if (filter.length < oldFilter.length) {
      this.notify('');
    }
  },

  componentWillMount: function componentWillMount() {
    this.notify = (0, _lodashFunctionDebounce2['default'])(this.props.onFilter, this.props.debounceTimeout);
  },

  onChange: function onChange(event) {
    this.setState({ filter: event.target.value });
  },

  render: function render() {
    return _reactAddons2['default'].createElement('input', _extends({ type: 'text', placeholder: 'Filter'
    }, this.props, {
      value: this.state.filter, onChange: this.onChange }));
  }
});

exports['default'] = ReactTextFilter;
module.exports = exports['default'];
// Pass props through
//# sourceMappingURL=ReactTextFilter.js.map