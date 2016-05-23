import React from 'react';
import DebounceInput from 'react-debounce-input';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


export const TextFilter = React.createClass({
  propTypes: {
    onFilter: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string,
    minLength: React.PropTypes.number,
    debounceTimeout: React.PropTypes.number
  },


  getDefaultProps() {
    return {
      minLength: 2,
      debounceTimeout: 300
    };
  },


  shouldComponentUpdate,


  render() {
    const {onFilter, filter, ...props} = this.props;

    return (
      <DebounceInput placeholder="Filter"
        // Pass props through
        {...props}
        onChange={onFilter}
        value={filter} />
    );
  }
});


export default TextFilter;
