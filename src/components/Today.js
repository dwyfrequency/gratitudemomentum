import React, { Component } from "react";
import "../styles/Today.css";
import AddDel from "./AddDel";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = { isAcknowledged: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { gratEntry } = this.props;
    const { isAcknowledged } = this.state;
    return (
      <div>
        <h2 className="TodayHeader">Today, I am grateful for:</h2>
        <form className="acknowledgeForm">
          <input
            id="isAcknowledged"
            name="isAcknowledged"
            type="checkbox"
            checked={isAcknowledged}
            onChange={this.handleChange}
          />
          <label htmlFor="isAcknowledged" className="strikethrough">
            {gratEntry}
          </label>
          <AddDel removeGratEntryHandler={this.props.removeGratEntryHandler} />
        </form>
      </div>
    );
  }
}

export default Today;
