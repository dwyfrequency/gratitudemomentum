import React, { Component } from "react";
import Dashboard from "./Dashboard";
import GratForm from "./GratForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratEntry: "",
      gratEntryFormDisabled: false
    };
    this.addGratEntryHandler = this.addGratEntryHandler.bind(this);
  }

  addGratEntryHandler(entry) {
    this.setState({ gratEntry: entry, gratEntryFormDisabled: true });
  }

  render() {
    const { gratEntryFormDisabled } = this.state;
    return (
      <div className="App">
        <header className="App-header" />
        <Dashboard />
        <GratForm
          addGratEntryHandler={this.addGratEntryHandler}
          disabled={gratEntryFormDisabled}
        />
        {this.state.gratEntry}
      </div>
    );
  }
}

export default App;
