import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ 
    country,
    countries,
    setCountries
}) {

const [favorite, setFavorite] = useState(country.favorite)

// UPDATES/PATCH FAVORITE STATUS
function onCountryClick(id) {
    favorite ? setFavorite(false) : setFavorite(true)
    
    fetch(`http://localhost:4000/countries/${id}`, {
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
        <article style={{textAlign: "center"}}>
            <h4>{country.country}</h4>
            <img src={country.flagImage} alt={country.country} />
            <br></br>
            {favorite ? <button onClick={e => onCountryClick(country.id)}>Unlike 👎</button> : <button onClick={e => onCountryClick(country.id)}>Like 👍</button>}
            <br></br>
            <br></br>
            <Link to={`/country/${country.id}`}>View Country</Link>
        </article>
    </li>
  )
}

export default CountryCard