import React, { useState } from 'react'

function Form({
    onAddCountry
}) {
const [form, setForm] = useState({
    country: "",
    continent: "",
    capital: "",
    flagImage: "",
    favorite: ""
})

console.log(form)

// CONTROLLED INPUTS
function handleChange(e) {
    const key = e.target.name
    const value = e.target.value
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
        continent: form.continent,
        capital: form.capital,
        flagImage: form.flagImage,
        favorite: form.favorite
    }
    fetch("http://localhost:3000/countries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCountry)
    })
    .then(res => res.json())
    .then(newCountry => onAddCountry(newCountry))
}

return (
    <div className="new-country-form">
      <h2>New Country Visited</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="country" 
        placeholder="Country"
        value={form.country}
        onChange={handleChange} 
        />
        <select 
            name="continent" 
            value={form.continent}
            onChange={handleChange} 
        >
            <option value={null}>Please choose...</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Australia/Oceania">Australia/Oceania</option>
        </select>
        <input 
        type="text" 
        name="capital" 
        placeholder="Capital"
        value={form.capital}
        onChange={handleChange} 
        />  
        <input 
        type="text" 
        name="flagImage" 
        placeholder="Flag Image URL"
        value={form.flagImage}
        onChange={handleChange} 
        />
        <select 
            name="favorite" 
            value={form.favorite}
            onChange={handleChange} 
        >
            <option value="true">Favorite</option>
            <option value="false">Unfavorite</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form