import React, { Component } from "react";
import "../styles/GratForm.css";

class GratForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratEntry: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.addGratEntryHandler(this.state.gratEntry);
    this.resetForm();
    event.preventDefault();
  }

  resetForm() {
    this.setState({ gratEntry: "" });
  }

  render() {
    const { disabled } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="gratEntry">
            <h2>What are you grateful for today</h2>
          </label>
          <input
            type="text"
            id="gratEntry"
            name="gratEntry"
            value={this.state.gratEntry}
            onChange={this.handleChange}
            disabled={disabled}
          />
        </div>
      </form>
    );
  }
}

export default GratForm;
