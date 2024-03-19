import React, { useState } from 'react'

function Form({
    onAddCountry
}) {
const [form, setForm] = useState({
    country: "",
    date: "",
    capital: "",
    flagImage: "",
    favorite: false,
    diaryEntry: ""
})

// SETS UP CONTROLLED INPUTS
function handleChange(e) {
    const key = e.target.name
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForm({
        ...form,
        [key]: value
    })
}

// POST REQUEST
function handleSubmit(e) {
    e.preventDefault()
    const newCountry = {
        country: form.country,
        date: form.date,
        capital: form.capital,
        flagImage: form.flagImage,
        favorite: form.favorite,
        diaryEntry: form.diaryEntry
    }
    fetch("http://localhost:4000/countries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCountry)
    })
    .then(res => res.json())
    .then(newCountry => onAddCountry(newCountry))
    setForm({
        country: "",
        date: "",
        capital: "",
        flagImage: "",
        favorite: false,
        diaryEntry: ""
    })
}

return (
    <div className="new-country-form">
      <h2>Post New Country</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-input">
        <input 
        type="text" 
        name="country" 
        placeholder="Country"
        value={form.country}
        onChange={handleChange} 
        />
      </div>
      <div className="form-input">
        <input 
          type="text" 
          name="date" 
          placeholder="Date Visited (Month Year)"
          value={form.date}
          onChange={handleChange} 
        />
      </div>
      <div className="form-input">
        <input 
        type="text" 
        name="capital" 
        placeholder="Capital"
        value={form.capital}
        onChange={handleChange} 
        />
      </div>
      <div className="form-input">
        <input 
        type="text" 
        name="flagImage" 
        placeholder="Flag Image URL"
        value={form.flagImage}
        onChange={handleChange} 
        />
      </div>
      <div className="form-input">
        <label>
            Favorite?
            <input 
            type="checkbox"
            name="favorite"
            checked={form.favorite}
            onChange={handleChange}
            />
        </label>
      </div>
      <div className="form-input">
        <textarea
            name="diaryEntry"
            placeholder="Enter diary entry..."
            value={form.diaryEntry}
            onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form