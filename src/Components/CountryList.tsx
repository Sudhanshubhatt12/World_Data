import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCard from './CountryCard.tsx';
import './CountryList.css';

const CountryList = ({ countries }) => {
  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    navigate(`/country/${country.cca3}`);
  };

  return (
    <div className="country-list">
      {countries.map(country => (
        <div key={country.name.common} onClick={() => handleCountryClick(country)}>
          <CountryCard country={country} className="country-card" />
        </div>
      ))}
    </div>
  );
}

export default CountryList;
