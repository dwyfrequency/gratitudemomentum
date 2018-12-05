import React, { Component } from "react";

class DailyQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: ""
    };
  }
  componentDidMount = () => {
    // const { text, from: author } = API("../data/enterpreneur-quotes.json");
    // this.setState({ text, author });
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then(resp => resp.json())
      .then(data => {
        const {
          contents: { quotes }
        } = data;
        const { author, quote } = quotes[0];
        this.setState({ author, quote });
        return data;
      });
  };

  render() {
    const { quote, author } = this.state;
    return (
      <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <p>
          <strong>{author}</strong> - "{quote}"
        </p>
      </footer>
    );
  }
}

export default DailyQuote;
