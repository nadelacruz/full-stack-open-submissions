import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  const [notificationMessage, setNotificationMessage] = useState(null);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersonList) => setPersons(initialPersonList));
  }, []);

  const handleNameTextboxChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberTextboxChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchTextboxChange = (event) => {
    setSearchText(event.target.value);
  };

  const showNotificationMessage = (message, isError) => {
    setNotificationMessage(message);
    setIsErrorMessage(isError);
    setTimeout(() => setNotificationMessage(null), 5000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkIfNameIsFound = persons.find(
      (person) => person.name === newName
    );
    if (checkIfNameIsFound === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personsService
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
      showNotificationMessage(`Added ${newPerson.name}`, false);
    } else if (
      // eslint-disable-next-line no-alert
      window.confirm(
        `${checkIfNameIsFound.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const changedPerson = { ...checkIfNameIsFound, number: newNumber };
      personsService
        .update(changedPerson.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== changedPerson.id ? person : returnedPerson
            )
          );
        });
      showNotificationMessage(`Updated ${changedPerson.name}'s number`, false);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (person) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.deleteElementWithId(person.id).catch(() => {
        showNotificationMessage(
          `Information of ${person.name} has already been removed from server`,
          true
        );
      });
      setPersons(
        persons.filter((currentPerson) => person.name !== currentPerson.name)
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notificationMessage}
        isErrorMessage={isErrorMessage}
      />
      <Filter
        searchText={searchText}
        handleSearchTextboxChange={handleSearchTextboxChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameTextboxChange={handleNameTextboxChange}
        handleNumberTextboxChange={handleNumberTextboxChange}
      />
      <h3>Numbers</h3>
      <Persons
        actualPersons={persons}
        actualSearchText={searchText}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
