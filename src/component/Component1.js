//ReactDOM.createClass
import React from 'react';
import { createClass } from 'react'
 
const Component1 = createClass({
  getDefaultProps() {
    return {
      renderText: ""
    }
  },
  render() {
    return (
      <h2>{this.props.renderText}</h2>
    );
  }
});
 
export default Component1;