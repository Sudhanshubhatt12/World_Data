
import React from 'react';

const BorderCountryCard = ({ country }) => {
  return (
    <div className="border-country-card">
      <h3>{country.name.common}</h3>
      {/* You can add more details about the bordering country if needed */}
    </div>
  );
}

export default BorderCountryCard;
