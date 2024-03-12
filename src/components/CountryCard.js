import React from 'react'

function CountryCard({ country }) {
  

    return (
    <li className="card">
      <h4>{country.country}</h4>
      <img src={country.flagImage} alt={country.country} />
      <p>Capital: {country.capital}</p>
    </li>
  )
}

export default CountryCard