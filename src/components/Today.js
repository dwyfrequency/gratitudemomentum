import React, { Component } from "react";

class Today extends Component {
  render() {
    const { gratEntry } = this.props;
    return (
      <div>
        <h3>Today</h3>
        <p>
          <strong>{gratEntry}</strong>
        </p>
      </div>
    );
  }
}

export default Today;
