import React, { Component } from "react";
import Dashboard from "./Dashboard";
import GratForm from "./GratForm";
import Today from "./Today";

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
    const { gratEntryFormDisabled, gratEntry } = this.state;
    return (
      <div className="App">
        <header className="App-header" />
        <Dashboard />
        {gratEntryFormDisabled ? null : (
          <GratForm
            addGratEntryHandler={this.addGratEntryHandler}
            disabled={gratEntryFormDisabled}
          />
        )}
        {gratEntry !== "" ? <Today gratEntry={gratEntry} /> : null}
      </div>
    );
  }
}

export default App;
