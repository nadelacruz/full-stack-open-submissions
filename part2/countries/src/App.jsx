import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import SearchCountries from "./components/SearchCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <div>
      <SearchCountries
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <CountryList countries={filteredCountries} />
    </div>
  ) : (
    <div>Fetching data from API...</div>
  );
};

export default App;
