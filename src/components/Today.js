import React, { Component } from "react";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = { isAcknowledged: false };
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
        <h3>Today</h3>
        <form>
          <label>
            <input
              name="isAcknowledged"
              type="checkbox"
              checked={isAcknowledged}
            />
            <strong>{gratEntry}</strong>
          </label>
        </form>
      </div>
    );
  }
}

export default Today;
