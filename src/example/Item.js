import React from 'react';


const Item = React.createClass({
  propTypes: {
    item: React.PropTypes.string.isRequired
  },


  render() {
    return <li>{this.props.item}</li>;
  }
});


export default Item;
