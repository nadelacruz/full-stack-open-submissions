import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => (
  <div>
    {countries.length <= 10 ? (
      <div>
        {countries.map((country) => (
          <CountryItem key={uuidv4()} country={country} />
        ))}
      </div>
    ) : (
      <div>Too many matches, specify another filter</div>
    )}
  </div>
);

CountryList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default CountryList;
