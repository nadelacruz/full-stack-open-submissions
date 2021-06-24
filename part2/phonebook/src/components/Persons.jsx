import PropTypes from "prop-types";

const Persons = ({ actualPersons, actualSearchText, handleDelete }) => {
  const PersonsWith = (persons, text) =>
    persons.filter((person) => person.name.includes(text));

  return (
    <div>
      {PersonsWith(actualPersons, actualSearchText).map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button type="button" onClick={() => handleDelete(person)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

Persons.propTypes = {
  actualPersons: PropTypes.array.isRequired,
  actualSearchText: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Persons;
