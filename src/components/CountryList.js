import React, { useEffect } from 'react';
import CountryCard from './CountryCard';

function CountryList({
    countries,
    setCountries
}) {

// GET REQUEST
useEffect(() => {
    fetch("http://localhost:4000/countries")
        .then(res => res.json())
        .then(list => setCountries(list))
}, [])

// MAIN DISPLAY
const mainDisplay = countries.map(country => {
  return <CountryCard
  key={country.id}
  country={country}
  countries={countries}
  setCountries={setCountries}
  />
})
  
return (
    <ul className='cards'>
        {mainDisplay}
    </ul>
  )
}

export default CountryList;