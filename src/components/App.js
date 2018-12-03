import React, { Component } from "react";
import Dashboard from "./Dashboard";
import GratForm from "./GratForm";
import Today from "./Today";
import DailyQuote from "./DailyQuote";
import Weather from "./Weather";

async function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

async function geoSuccess(position) {
  const { latitude: lat, longitude: lon } = position.coords;
  console.log({ lat, lon });
  return { lat, lon };
}

function geoError() {
  alert("Geocoder failed.");
}

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
  async componentDidMount() {
    // const { latitude: lat, longitude: lon } = await getLocation();
    const resp = getLocation();
    console.log(resp, "resp");
    // console.log(lat, lon);
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
