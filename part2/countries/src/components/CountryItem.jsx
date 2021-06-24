import { useState } from "react";
import PropTypes from "prop-types";
import CountryInfo from "./CountryInfo";

const CountryItem = ({ country }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      {country.name}
      <button type="button" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? "Hide" : "Show"}
      </button>
      {isOpened ? <CountryInfo country={country} /> : <div />}
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
