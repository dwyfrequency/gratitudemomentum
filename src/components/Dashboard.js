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
    this.timeIntervalId = setInterval(() => {
      this.setTime();
      this.setGreeting();
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timeIntervalId);
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
  setTime() {
    this.setState({
      time: this.getTime()
    });
  }

  getGreeting() {
    const hrs = parseInt(this.state.time.split(":")[0]);
    if (hrs < 12 && hrs > 4) {
      return "Good Morning";
    } else if (hrs > 12 && hrs < 4) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  setGreeting() {
    this.setState({
      greeting: this.getGreeting()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default Dashboard;
