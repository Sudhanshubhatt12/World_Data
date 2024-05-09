// Header.tsx
import React from 'react';
import './Header.css';
import { CiDark ,CiLight} from "react-icons/ci"

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Where in the world?</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ?  <CiLight /> : <CiDark />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
