import React, { Component } from "react";
import Loading from "./Loading";

class DailyQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      author: "",
      quote: ""
    };
  }
  componentDidMount = () => {
    // const { text, from: author } = API("../data/enterpreneur-quotes.json");
    // this.setState({ text, author });
    this.setState(prevState => ({ loading: true }));
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then(resp => resp.json())
      .then(data => {
        const {
          contents: { quotes }
        } = data;
        const { author, quote } = quotes[0];
        this.setState(prevState => ({ loading: false, author, quote }));
        return data;
      });
  };

  render() {
    const { loading, quote, author } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <p>
          <strong>{author}</strong> - "{quote}"
        </p>
      </footer>
    );
  }
}

export default DailyQuote;
