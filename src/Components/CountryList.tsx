import React from 'react';
import CountryCard from './CountryCard.tsx';
import './CountryList.css'

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;