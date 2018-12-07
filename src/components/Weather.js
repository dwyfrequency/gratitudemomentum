import React, { Component } from "react";
import "../styles/Weather.css";
import toTitleCase from "../helperFuncs/toTitleCase";
import Loading from "./Loading";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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

  setWeather() {
    const { lat, lon } = this.state;
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
      .then(response => response.json())
      .then(json => {
        const {
          name: city,
          main: { temp }
        } = json;
        const { main: shortDescr, description, icon } = json.weather[0];
        this.setState({
          loading: false,
          city,
          shortDescr,
          description,
          icon,
          temp
        });
      });
  }
  componentDidMount() {
    this.getLocation();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lat !== this.state.lat && prevState.lon !== this.state.lon) {
      this.setWeather();
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, () =>
        console.error("Error with getting location")
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  geoSuccess(position) {
    const { latitude: lat, longitude: lon } = position.coords;
    this.setState({ loading: true, lat, lon });
  }

  render() {
    const { loading, city, shortDescr, description, temp, icon } = this.state;
    return loading ? (
      <Loading />
    ) : city ? (
      <div>
        <ul className="Weather-list">
          <li>{city}</li>
          {/* checks whether there is a value in description before using a string method, b/c before api call it is undefined and will fail */}
          <li>{description && toTitleCase(description)}</li>
          <li>{temp}°C</li>
          <li>
            <img src={icon} alt={shortDescr} />
          </li>
        </ul>
      </div>
    ) : (
      <p>Enable geolocation for weather info</p>
    );
  }
}

export default Weather;
