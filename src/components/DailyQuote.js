import React, { Component } from "react";
import API from "../funcs/API";

class DailyQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const { text, from: author } = API("../data/enterpreneur-quotes.json");
    this.setState({ text, author });
  };

  render() {
    const { text, author } = this.state;
    return (
      <footer>
        <p>{author}:</p>
        <p>{text}</p>
      </footer>
    );
  }
}

export default DailyQuote;
