import React, { Component } from "react";
import Dashboard from "./Dashboard";
import GratForm from "./GratForm";
import Today from "./Today";
import DailyQuote from "./DailyQuote";
import Weather from "./Weather";
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratEntry: "",
      gratEntryFormDisabled: false
    };
    this.addGratEntryHandler = this.addGratEntryHandler.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  addGratEntryHandler(entry) {
    this.setState({ gratEntry: entry, gratEntryFormDisabled: true });
  }

  resetState() {
    this.setState({ gratEntry: "", gratEntryFormDisabled: false });
  }

  render() {
    const { gratEntryFormDisabled, gratEntry } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Weather />
        </header>
        <Dashboard />
        {gratEntryFormDisabled ? null : (
          <GratForm
            addGratEntryHandler={this.addGratEntryHandler}
            disabled={gratEntryFormDisabled}
          />
        )}
        {gratEntry !== "" ? (
          <Today
            gratEntry={gratEntry}
            removeGratEntryHandler={this.resetState}
          />
        ) : null}
        <DailyQuote />
      </div>
    );
  }
}

export default App;
