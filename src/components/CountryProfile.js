import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom'
import "../Home.css"

function CountryProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [country, setCountry] = useState({
    id: "",
    country: "",
    continent: "",
    capital: "",
    flagImage: "",
    favorite: false,
    diaryEntry: ""
  })
  const params = useParams();
  const countryId = params.id

  // HANDLE ROUTING VIA PARAMS
  useEffect(() => {
    fetch(`http://localhost:4000/countries/${countryId}`)
        .then(res => res.json())
        .then(data => setCountry(data))
        .catch(error => console.log(error))
  }, [countryId])

  // 
  function handleEditButtonClick() {
    setIsEditMode(true);
  };

  // PATCH DIARY ENTRY
  function handleSaveButtonClick() {
    setIsEditMode(false);
    fetch(`http://localhost:4000/countries/${countryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        diaryEntry: country.diaryEntry
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  };

    return (
    <>
        <NavBar />
        <article className="profile">
          <h1>{country.country}</h1>
          <img src={country.flagImage} alt={country.country} />
          <h4>Capital: {country.capital}</h4>
          <h4>Date Visited: {country.date}</h4>
          <h3>Diary Entry</h3>
          {isEditMode ? (
            <div className="content-box">
              <textarea 
              value={country.diaryEntry} 
              onChange={e => setCountry({
                ...country,
                diaryEntry: e.target.value
              })} 
              />
              <button onClick={handleSaveButtonClick}>Save</button>
            </div>
          ) : (
            <p>{country.diaryEntry}</p>
          )}
          {!isEditMode && <button onClick={handleEditButtonClick}>Edit</button>}
        </article>
    </>
  )
}

export default CountryProfile