import React, { useEffect, useState } from "react";
import CountriesTable from "./CountriesTable";
const url = "https://restcountries.com/v2/all";
const Main = () => {
 
 
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [seacrhTerm, setSeacrhTerm] = useState({
    country: "",
    any: "",
  });

  const getCountries = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const res = countries?.filter((search) => {
      return seacrhTerm.any
        ? search.region
            ?.toLowerCase()
            .match(seacrhTerm.any.toLowerCase().trim()) ||
            search.name
              ?.toLowerCase()
              .match(seacrhTerm.any.toLowerCase().trim()) ||
            search.capital
              ?.toLowerCase()
              .match(seacrhTerm.any.toLowerCase().trim())
        : search.name
            ?.toLowerCase()
            .match(seacrhTerm.country.toLowerCase().trim());
    });

    setFilteredCountries(res);
  }, [seacrhTerm, countries]);

  return (
    <div className="container mt-4">
      <h4 className="text-danger">Countries Table</h4>
      <div className="container  d-flex mt-4">
        <div className="input-group input-group w-50  m-2 ">
          <span className="input-group-text">Search Country</span>
          <input
            type="text"
            className="form-control "
            name="country"
            value={seacrhTerm.country}
            onChange={(e) =>
              setSeacrhTerm({ ...seacrhTerm, country: e.target.value })
            }
          />
        </div>
        <div className="input-group input-group w-50  m-2 ">
          <span className="input-group-text">Search Any</span>
          <input
            type="text"
            className="form-control "
            name="any"
            value={seacrhTerm.any}
            onChange={(e) =>
              setSeacrhTerm({ ...seacrhTerm, any: e.target.value })
            }
          />
        </div>
      </div>

      <CountriesTable filteredCountries={filteredCountries} />
    </div>
  );
};

export default Main;
