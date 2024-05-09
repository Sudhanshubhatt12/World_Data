
import React, { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import Home from './Components/Home.tsx';
import Header from './Components/Header.tsx';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  return (
    
      
        <div className={darkMode ? "dark-mode" : ""}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Add element for CountryDetailPage route */}
        
      </Routes>
      </div>
    
  );
}

export default App;
