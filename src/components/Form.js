import React from 'react'

function Form() {
  return (
    <div className="new-country-form">
      <h2>New Country Visited</h2>
      <form onSubmit={null}>
        <input 
        type="text" 
        name="country" 
        placeholder="Country"
        value={null}
        onChange={null} 
        />
        <select 
            value={null}
            onChange={null}
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
        value={null}
        onChange={null} 
        />  
        <input 
        type="text" 
        name="" 
        placeholder="Flag Image URL"
        value={null}
        onChange={null} 
        />
        <select 
            value={null}
            onChange={null}
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