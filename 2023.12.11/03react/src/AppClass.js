import React, { Component } from "react";
import BoxClass from "./BoxClass";
import "./AppClass.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      value: 0,
    };
    console.log("constructor");
  }
  increase= () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
  };
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  render() {
    console.log("render");
    return (
      <div className="AppClass">
        <div>{this.state.counter2}</div>
        <button onClick={this.increase}>Click!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
