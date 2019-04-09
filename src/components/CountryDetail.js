import React from 'react';

const CountryDetail = (props) => {
  if (!props.country) return null
  return (
    <div>
    <h3>
      Name: {props.country.name}
    </h3>
    <h3>
      Population: {props.country.population}
    </h3>
    </div>
  )
}

export default CountryDetail;
