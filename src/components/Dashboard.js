import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTime()
    };
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    this.intervalId = setInterval(() => {
      this.getTime();
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };
  getTime() {
    let date = new Date();
    let hrs = date.getHours(),
      mins = date.getMinutes();
    if (mins <= 9) {
      mins = "0" + mins;
    }
    return `${hrs}:${mins}`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Dashboard;
