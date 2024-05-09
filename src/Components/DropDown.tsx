import React from 'react';

const DropDown = ({ regions, handleFilter }) => {
  return (
    <select onChange={e => handleFilter(e.target.value)}>
      <option value="">Filter by Region</option>
      {regions.map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
  );
}

export default DropDown;