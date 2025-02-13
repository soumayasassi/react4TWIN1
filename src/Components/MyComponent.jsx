import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
  
      this.handleClick = this.handleClick.bind(this); //binding
    }
  
    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return <button onClick={this.handleClick}>Click me</button>;
    }
  }
  export default MyComponent;