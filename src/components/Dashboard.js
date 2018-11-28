import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTime(),
      greeting: this.getGreeting()
    };
    this._callEveryHour = this._callEveryHour.bind(this);
    this.getTime = this.getTime.bind(this);
    this.setTime = this.setTime.bind(this);
    this.getGreeting = this.getGreeting.bind(this);
    this.setGreeting = this.setGreeting.bind(this);
  }
  _callEveryHour(func) {
    return setInterval(func, 1000 * 60 * 60);
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    this.timeIntervalId = setInterval(() => {
      this.setTime();
    }, 1000);

    this.greetingIntervalId = this._callEveryHour(this.getGreeting);
  };
  componentWillUnmount = () => {
    clearInterval(this.timeIntervalId);
    clearInterval(this.greetingIntervalId);
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
    const myDate = new Date();
    const hrs = myDate.getHours();

    let greeting;

    if (hrs < 12) {
      greeting = "Good Morning";
    } else if (hrs >= 12 && hrs <= 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
    return greeting;
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
