
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useCountry } from './CountryContext';
import './CountryDetail.css'

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const [loading, setLoading] = useState(true);
  const countries = useCountry();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Countries:', countries);
    setLoading(true);
    // Check if the countries data is available
    if (countries && countries.length > 0) {
      setLoading(false);
    }
  }, [countries]);

  // Added a check to prevent displaying loading message if data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  const country = countries.find(country => country.cca3 === countryCode);

  if (!country) {
    return <div>Country not found</div>;
  }

  const handleBack = () => {
    navigate('/');
  };
  const languages = Object.values(country.languages).join(', ');// for languages
  const currencyCode = Object.keys(country.currencies)[0]; // for currencies
const currency = country.currencies[currencyCode];
const nativeNames = Object.entries(country.name.nativeName).map(([key, value]) => `${value.common} (${key})`).join(', ');//for native name

  return (
    <div className="country-detail-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <div className="countrydetail-card">
        <div className="flag">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </div>
        <div className="country-details">
          <div className="country-details-section">
            <h2>{country.name.common}</h2>
            
          </div>
          <div className="country-details-section">
          <span style={{marginRight:'3.5rem'}}>
          <p><h1>Native Name: </h1> {nativeNames}</p>
            <p><h1>Population: </h1> {country.population}</p>
            <p><h1>Region: </h1> {country.region}</p>
            <p><h1>Sub Region: </h1> {country.subregion}</p>
            <p><h1>Capital: </h1> {country.capital}</p>
            </span><span>
            <p><h1>Top Level Domain: </h1> {country.tld}</p>
            <p><h1>Currencies: </h1> {currency.name}</p>
            <p><h1>Languages: </h1> {languages}</p>
            </span>
          </div>
          <div className="country-details-section">
            <span className='b_title'>
            <p><h1>Border Countries: </h1></p></span>
            <span className='b_country'> {country.borders.map(country => (<button>{country}</button>))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailPage;
