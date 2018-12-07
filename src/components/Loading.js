import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Loading"
    };
  }
  componentDidMount = () => {
    this.stopper = this.state.text + "...";

    this.interval = setInterval(() => {
      this.state.text === this.stopper
        ? this.setState({ text: "Loading" })
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, 300);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };
  render() {
    return <div>{this.state.text}</div>;
  }
}

export default Loading;
