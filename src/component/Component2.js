//es6 class
import React, { Component } from 'react';
 
export class Component2 extends Component {
  render() {
    return (
      <h2>{this.props.renderText}</h2>
    );
  }
};

Component2.defaultProps = {
  renderText: ""
}