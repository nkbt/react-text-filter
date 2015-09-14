import React from 'react';
import debounce from 'lodash.debounce';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const ReactTextFilter = React.createClass({
  propTypes: {
    onFilter: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string,
    minLength: React.PropTypes.number,
    debounceTimeout: React.PropTypes.number
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
    return shouldComponentUpdate.call(this, ...args);
  },


  componentWillUpdate({minLength, debounceTimeout}, {filter}) {
    this.maybeUpdateNotifier(debounceTimeout);
    this.maybeNotify(minLength, filter);
  },


  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  },


  createNotifier(debounceTimeout) {
    this.notify = debounce(this.props.onFilter, debounceTimeout);
  },


  maybeUpdateNotifier(debounceTimeout) {
    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
    }
  },


  maybeNotify(minLength, filter) {
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
