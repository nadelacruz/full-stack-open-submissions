import PropTypes from "prop-types";

const SearchCountries = ({ searchText, handleSearchTextChange }) => {
  return (
    <div>
      find countries{" "}
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
    </div>
  );
};

SearchCountries.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchTextChange: PropTypes.func.isRequired,
};

export default SearchCountries;
