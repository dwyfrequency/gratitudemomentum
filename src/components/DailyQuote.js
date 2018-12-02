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
      .then(resp => {
        console.log(resp);
        return resp.json();
      })
      .then(data => {
        console.log(data);
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
      <footer>
        <p>
          <strong>{author}</strong> - "{quote}"
        </p>
      </footer>
    );
  }
}

export default DailyQuote;
