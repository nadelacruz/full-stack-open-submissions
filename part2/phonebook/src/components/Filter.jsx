import PropTypes from "prop-types";

const Filter = ({ searchText, handleSearchTextboxChange }) => (
  <div>
    filter shown with{" "}
    <input value={searchText} onChange={handleSearchTextboxChange} />
  </div>
);

Filter.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchTextboxChange: PropTypes.func.isRequired,
};

export default Filter;
