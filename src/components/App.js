import React, { Component } from "react";
import Dashboard from "./Dashboard";
import GratForm from "./GratForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratEntry: ""
    };
    this.addGratEntryHandler = this.addGratEntryHandler.bind(this);
  }

  addGratEntryHandler(entry) {
    this.setState({ gratEntry: entry });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Dashboard />
        <GratForm addGratEntryHandler={this.addGratEntryHandler} />
        {this.state.gratEntry}
      </div>
    );
  }
}

export default App;
