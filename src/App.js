
import React, { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import Home from './Components/Home.tsx';
import Header from './Components/Header.tsx';
import CountryDetailPage from './Components/CountryDetailPage.tsx';
import { CountryProvider } from './Components/CountryContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    document.body.dataset.theme = darkMode ? "dark":"light" ;
  };
  return (
    
      <CountryProvider>
        <div>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryDetailPage />} />
      </Routes>
      </div>
      </CountryProvider>
  );
}

export default App;
