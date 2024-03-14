import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom'

function CountryProfile() {
  const [country, setCountry] = useState({})
  const params = useParams();
  const countryId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/countries/${countryId}`)
        .then(res => res.json())
        .then(data => setCountry(data))
        .catch(error => console.log(error))
  }, [countryId])

    return (
    <>
        <NavBar />
        <article>
            <h1>{country.country}</h1>
        </article>
    </>
  )
}

export default CountryProfile