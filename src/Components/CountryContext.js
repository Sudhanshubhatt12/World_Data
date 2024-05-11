// CountryContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,subregion,borders,currencies,cca3,tld,languages');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
