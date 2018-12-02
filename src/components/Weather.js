import React, { Component } from "react";
import config from "../hidden/config";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city ? this.props.city : "Miami",
      countryCode: this.props.countryCode ? this.props.countryCode : "US"
    };
    this.getWeather = this.getWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  async getWeather() {
    const { WEATHER_KEY } = config;
    const { city, countryCode } = this.state;
    // URL
    const weatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=imperial&appid=${WEATHER_KEY}`;
    // log(weatherEndpoint);

    const weatherResps = await fetch(weatherEndpoint);
    const responseData = await weatherResps.json();
    return responseData;
  }

  async setWeather() {
    const apiResponse = await this.getWeather();
    console.log(apiResponse);
    const { description, main: descrSummary, icon } = apiResponse.weather[0];
    const { humidity, temp } = apiResponse.main;
    this.setState({
      description,
      descrSummary,
      icon: `http://openweathermap.org/img/w/${icon}.png`,
      humidity,
      temp
    });
  }
  componentDidMount = () => {
    this.setWeather();
  };

  render() {
    const {
      city,
      description,
      descrSummary,
      temp,
      humidity,
      icon
    } = this.state;
    return (
      <div>
        <h3>{city}</h3>
        <img src={icon} alt={descrSummary} />
        {/* checks whether there is a value in description before using a string method, b/c before api call it is undefined and will fail */}
        <li>{description && description.toUpperCase()}</li>
        <li>{temp}</li>
        <li>{humidity}</li>
      </div>
    );
  }
}

export default Weather;
