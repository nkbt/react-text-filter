import React from 'react/addons';
import debounce from 'lodash/function/debounce';
const {PropTypes, addons: {PureRenderMixin}} = React;


const ReactTextFilter = React.createClass({
  propTypes: {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
    minLength: PropTypes.number,
    debounceTimeout: PropTypes.number
  },


  getDefaultProps() {
    return {
      minLength: 2,
      filter: '',
      debounceTimeout: 100
    };
  },


  getInitialState() {
    return {
      filter: this.props.filter
    };
  },


  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.call(this, ...args);
  },


  componentWillUpdate({minLength}, {filter}) {
    const {filter: oldFilter} = this.state;

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


  componentWillMount() {
    this.notify = debounce(this.props.onFilter, this.props.debounceTimeout);
  },


  onChange(event) {
    this.setState({filter: event.target.value});
  },


  render() {
    return (
      <input type="text" placeholder="Filter"
        // Pass props through
        {...this.props}
        value={this.state.filter} onChange={this.onChange} />
    );
  }
});


export default ReactTextFilter;
