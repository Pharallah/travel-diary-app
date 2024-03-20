import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom'
import "../Home.css"

function CountryProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCountry, setCurrentCountry] = useState({
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

  // HANDLE ROUTING VIA PARAMS & POPULATE CURRENT COUNTRY
  useEffect(() => {
    fetch(`http://localhost:4000/countries/${countryId}`)
        .then(res => res.json())
        .then(data => setCurrentCountry(data))
        .catch(error => console.log(error))
  }, [countryId])

  // TOGGLES EDIT MODE
  function handleEditButtonClick() {
    setIsEditMode(true);
  };

  // HANDLE SAVE FOR DIARY ENTRY FEATURE
  function handleEdit(e) {
    setCurrentCountry({
      ...currentCountry,
      diaryEntry: e.target.value
    })
  }

  // PATCH DIARY ENTRY
  function handleSaveButtonClick(e) {
    setIsEditMode(false);
    fetch(`http://localhost:4000/countries/${countryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        diaryEntry: currentCountry.diaryEntry
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  };

    return (
    <>
        <NavBar />
        <article className="profile">
          <h1>{currentCountry.country}</h1>
          <img src={currentCountry.flagImage} alt={currentCountry.country} />
          <h4>Capital: {currentCountry.capital}</h4>
          <h4>Date Visited: {currentCountry.date}</h4>
          <h3>Diary Entry</h3>
          {isEditMode ? (
            <div className="content-box">
              <textarea 
              value={currentCountry.diaryEntry} 
              onChange={handleEdit} 
              />
              <button onClick={handleSaveButtonClick}>Save</button>
            </div>
          ) : (
            <p>{currentCountry.diaryEntry}</p>
          )}
          {!isEditMode && <button onClick={handleEditButtonClick}>Edit</button>}
        </article>
    </>
  )
}

export default CountryProfile