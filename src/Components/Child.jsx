import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (<>
        
        <h3> i received this msg {this.props.num}</h3>
        this is the child</>  );
    }
}
 
export default Child;