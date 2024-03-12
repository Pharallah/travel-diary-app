import React, { useState, useEffect } from 'react'

function CountryCard({ country }) {
  const [favorite, setFavorite] = useState()

  useEffect(() => {
    if(country.favorite === true) {
        setFavorite(true)
    } else {
        setFavorite(false)
    }
  }, [favorite])

    return (
    <li className="card">
      <h4>{country.country}</h4>
      <img src={country.flagImage} alt={country.country} />
      <p>Capital: {country.capital}</p>
      {favorite ? <button>Unfavorite ♡</button> : <button >Favorite ♥️</button>}
    </li>
  )
}

export default CountryCard