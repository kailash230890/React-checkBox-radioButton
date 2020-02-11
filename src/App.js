import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check1: true,
      check2: false,
      radio1: "apple"
    };
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onCheckChange(e) {
    console.log(e.target.checked);

    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  onRadioChange(e) {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="check1"
          checked={this.state.check1}
          onChange={this.onCheckChange}
        />
        Fruits <br />

        <input
          type="checkbox"
          name="check2"
          checked={this.state.check2}
          onChange={this.onCheckChange}
        />
        Veggies <br />

        <input
          type="radio"
          name="radio1"
          value="apple"
          checked={this.state.radio1 === "apple"}
          onChange={this.onRadioChange}
        />{" "}
        Apple <br />

        <input
          type="radio"
          name="radio1"
          value="orange"
          checked={this.state.radio1 === "orange"}
          onChange={this.onRadioChange}
        />{" "}
        Orange <br />

        Fruits: {this.state.check1.toString()} <br />
        Veggies: {this.state.check2.toString()} <br />
        Radio: {this.state.radio1} <br />
      </div>
    );
  }
}

export default App;
