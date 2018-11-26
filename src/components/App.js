import React, { Component } from "react";
import "../styles/App.css";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1>gekki</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
