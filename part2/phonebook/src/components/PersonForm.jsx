import PropTypes from "prop-types";

const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  handleNameTextboxChange,
  handleNumberTextboxChange,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameTextboxChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberTextboxChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
);

PersonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNameTextboxChange: PropTypes.func.isRequired,
  handleNumberTextboxChange: PropTypes.func.isRequired,
};

export default PersonForm;
