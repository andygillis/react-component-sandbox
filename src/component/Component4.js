//server side render without jsx
var React = require('react');

class Component4 extends React.Component{
  render() {
    return React.createElement('h2', null, `${this.props.renderText}`);
  }
};

Component4.defaultProps = {
  renderText: ""
}
 
exports.Component4 = Component4;