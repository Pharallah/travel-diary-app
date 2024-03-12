import React, { useState, useEffect } from 'react'

function CountryCard({ 
    country,
    countries,
    setCountries
}) {

const [favorite, setFavorite] = useState(country.favorite)

// UPDATES FAVORITE STATUS
function onCountryClick(id) {
    favorite ? setFavorite(false) : setFavorite(true)
    fetch(`http://localhost:3000/countries/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            favorite: !favorite
        })
    })
    .then(res => res.json())
    .then(updatedCountry => {
        const updatedCountries = countries.map(country => {
                if (country.id === updatedCountry.id) {
                    return updatedCountry
                } else {
                    return country
                }
            })
        setCountries(updatedCountries)
    })
    
}

return (
    <li className="card">
        <h4>{country.country}</h4>
        <img src={country.flagImage} alt={country.country} />
        <p>Capital: {country.capital}</p>
        {favorite ? <button onClick={e => onCountryClick(country.id)}>Unfavorite ♡</button> : <button onClick={e => onCountryClick(country.id)}>Favorite ♥️</button>}
    </li>
  )
}

export default CountryCard