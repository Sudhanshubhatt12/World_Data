// HomePage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList.tsx';
import SearchInput from './SearchInput.tsx';
import DropDown from './DropDown.tsx';
import './Home.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,subregion,borders,currencies,cca3,tld,languages,`
        );
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterCountries();
  }, [searchTerm,regionFilter]);

  const filterCountries = () => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (regionFilter) {
      filtered = filtered.filter(country =>
        country.region.toLowerCase().includes(regionFilter.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilter = (value: string) => {
    setRegionFilter(value);
  };

  return (
    <div className='HomeContainer'>
      <div className="Home-menu">
      <div className="Home-search">
        <SearchInput  handleSearch={handleSearch} /></div>
        <div className="Home-filter">
        <DropDown regions={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania','Antarctic',]} handleFilter={handleFilter} ></DropDown>
      </div></div>
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default Home;
