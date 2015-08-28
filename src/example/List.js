import React from 'react';
import Item from './Item';


const List = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },


  render() {
    const Items = this.props.items.map(item => <Item key={item} item={item} />);

    return <ul>{Items}</ul>;
  }
});


export default List;
