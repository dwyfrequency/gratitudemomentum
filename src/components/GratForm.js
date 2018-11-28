import React, { Component } from "react";

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
    event.preventDefault();
  }

  resetForm() {
    this.setState({ gratEntry: "" });
  }

  render() {
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
          />
        </div>
      </form>
    );
  }
}

export default GratForm;
