import React, { Component } from "react";
import "../styles/Today.css";

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
        <h3>Today I am grateful for:</h3>
        <form>
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
        </form>
      </div>
    );
  }
}

export default Today;
