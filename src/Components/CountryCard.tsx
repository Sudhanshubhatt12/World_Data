import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card" key={country.name.common}>
    <img src={country.flags.svg} alt={`${country.name.common} flag`} />
    <div className="country-card-content">
      <h2>{country.name.common}</h2>
      <p><h1>Population:</h1> {country.population}</p>
      <p><h1>Region:</h1> {country.region}</p>
      <p><h1>Capital:</h1> {country.capital}</p>
    </div>
  </div>
  );
}

export default CountryCard;