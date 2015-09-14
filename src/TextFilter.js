import React from 'react';
import DebounceInput from 'react-debounce-input';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const TextFilter = React.createClass({
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
    return {filter: this.props.filter};
  },


  componentWillReceiveProps({filter}) {
    if (this.props.filter !== filter) {
      this.setState({filter});
    }
  },


  shouldComponentUpdate,


  onChange(filter) {
    const {onFilter, minLength} = this.props;

    this.setState({filter}, () => filter.length >= minLength ? onFilter(filter) : onFilter(''));
  },


  render() {
    const {onFilter, filter: f, minLength, debounceTimeout, ...props} = this.props;
    const {filter: value} = this.state;

    return (
      <DebounceInput placeholder="Filter"
        // Pass props through
        {...props}
        minLength={0}
        debounceTimeout={debounceTimeout}
        value={value}
        onChange={this.onChange} />
    );
  }
});


export default TextFilter;
