import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      city: "",
      description: "",
      icon: "",
      temp: ""
    };
    this.setWeather = this.setWeather.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.geoSuccess = this.geoSuccess.bind(this);
  }

  async setWeather() {
    const { lat, lon } = this.state;
    const response = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
    );
    const json = await response.json();
    const {
      name: city,
      main: { temp }
    } = await json;
    const { main: shortDescr, description, icon } = await json.weather[0];
    await this.setState({ city, shortDescr, description, icon, temp });
  }
  async componentDidMount() {
    // this.setWeather();
    this.getLocation();
    // console.log(lat, lon);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.lat !== this.state.lat && prevState.lon !== this.state.lon) {
      await this.setWeather();
    }
  }

  async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, () =>
        console.error("Error with getting location")
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async geoSuccess(position) {
    const { latitude: lat, longitude: lon } = position.coords;
    this.setState({ lat, lon });
  }

  render() {
    const { city, shortDescr, description, temp, icon } = this.state;
    return city ? (
      <div>
        <h3>{city}</h3>
        <img src={icon} alt={shortDescr} />
        {/* checks whether there is a value in description before using a string method, b/c before api call it is undefined and will fail */}
        <ul>
          <li>{description && description.toUpperCase()}</li>
          <li>{temp}°C</li>
        </ul>
      </div>
    ) : (
      <p>Enable geolocation for weather info</p>
    );
  }
}

export default Weather;
