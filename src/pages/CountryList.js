import React, { useEffect } from 'react';
import CountryCard from '../components/CountryCard';

function CountryList({
    countries,
    setCountries
}) {
  
    useEffect(() => {
        fetch("http://localhost:3000/countries")
            .then(res => res.json())
            .then(list => setCountries(list))
    }, [])

    // MAIN DISPLAY
  const mainDisplay = countries.map(country => {
    return <CountryCard
    key={country.id}
    country={country}
    />
  })
  
return (
    <ul className='cards'>
        {mainDisplay}
    </ul>
  )
}

export default CountryList