import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const altText = `flag of ${country.name}`;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital
          .split(" ")
          .join("%20")}`
      )
      .then((result) => {
        setWeather(result.data);
      });
  }, []);

  return weather ? (
    <div>
      <h1>{country.name}</h1>
      <p>
        capital {country.capital} <br /> population {country.population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => {
          return <li key={uuidv4()}>{language.name}</li>;
        })}
      </ul>
      <img alt={altText} src={country.flag} width="100px" />
      <h2>Weather in {country.capital}</h2>
      <p>
        <b>temperature: </b> {weather.current.temperature} Celcius
        <br />
        <img
          alt={weather.current.weather_descriptions[0]}
          src={weather.current.weather_icons[0]}
        />
        <br />
        <b>wind: </b> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryInfo;
