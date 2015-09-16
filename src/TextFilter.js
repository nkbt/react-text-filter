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
      debounceTimeout: 100
    };
  },


  shouldComponentUpdate,


  render() {
    const {onFilter, filter, ...props} = this.props;

    return (
      <DebounceInput placeholder="Filter"
        // Pass props through
        {...props}
        value={filter}
        onChange={onFilter} />
    );
  }
});


export default TextFilter;
