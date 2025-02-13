import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  state = { count: 0 };
  increment = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <h1> Compteur {this.state.count} </h1>
        <button onClick={this.increment}> + {this.props.step}</button>
        <button onClick={this.decrement}> - {this.props.step}</button>
        <button onClick={this.reset}> Reset</button>
      </>
    );
  }
}

export default Counter;
