import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card" key={country.name.common}>
    <img src={country.flags.svg} alt={`${country.name.common} flag`} />
    <div className="country-card-content">
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  </div>
  );
}

export default CountryCard;