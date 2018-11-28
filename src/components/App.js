import React, { Component } from "react";
import Dashboard from "./Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Dashboard />
      </div>
    );
  }
}

export default App;
