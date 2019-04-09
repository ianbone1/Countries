import React from 'react';

const CountrySelector = (props) => {

  const options = props.countries.map((country, index) => {
    return <option value={index} key={index}>{country.name}</option>
  })

  const handleChange = (event) => {
    props.handleCountrySelected(event.target.value)
  }


  return (
    <select id="country-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a country...</option>
    {options}
    </select>
  )
}

export default CountrySelector;
