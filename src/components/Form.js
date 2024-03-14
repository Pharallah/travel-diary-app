import React, { useState } from 'react'

function Form({
    onAddCountry
}) {
const [form, setForm] = useState({
    country: "",
    continent: "",
    capital: "",
    flagImage: "",
    favorite: false
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
    setForm({
        country: "",
        continent: "",
        capital: "",
        flagImage: "",
        favorite: false
    })
}

return (
    <div className="new-country-form">
      <h2>New Country Visited</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px', width: '200px' }}>
        <input 
        type="text" 
        name="country" 
        placeholder="Country"
        value={form.country}
        onChange={handleChange} 
        style={{ width: '100%', margin: 'auto' }} // Adjust width as needed
        />
      </div>
      <div style={{ marginBottom: '10px', width: '200px' }}>
        <select 
        name="continent" 
        value={form.continent}
        onChange={handleChange} 
        style={{ width: '104%', margin: 'auto' }} // Adjust width as needed
        >
        <option value={null}>Choose Continent...</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Australia/Oceania">Australia/Oceania</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px', width: '200px' }}>
        <input 
        type="text" 
        name="capital" 
        placeholder="Capital"
        value={form.capital}
        onChange={handleChange} 
        style={{ width: '100%', margin: 'auto' }} // Adjust width as needed
        />
      </div>
      <div style={{ marginBottom: '10px', width: '200px' }}>
        <input 
        type="text" 
        name="flagImage" 
        placeholder="Flag Image URL"
        value={form.flagImage}
        onChange={handleChange} 
        style={{ width: '100%', margin: 'auto' }} // Adjust width as needed
        />
      </div>
      <div style={{ marginBottom: '10px', width: '200px' }}>
        <label>
            Favorite?
            <input 
            type="checkbox"
            name="favorite"
            checked={form.favorite}
            onChange={handleChange}
            style={{ margin: 'auto' }} // Adjust width as needed
            />
        </label>
        
      </div>
      <textarea
        name="comment"
        placeholder="Enter your comment"
        value={form.comment}
        onChange={handleChange}
        style={{
          flex: 1,
          height: '100%',
          width: 'auto'
        }}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form