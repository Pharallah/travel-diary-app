import React, { useState } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import CountryList from "./CountryList";

function Home() {
const [countries, setCountries] = useState([])

// HANDLE POST REQUEST
function onAddCountry(newCountry) {
  const updatedCountries = [
    ...countries,
    newCountry
  ]
  setCountries(updatedCountries)
}

return (
  <>
    <header className="home">
      <h1>
        Travel Diary App
        <span className="logo" role="img">
          🛫
        </span>
      </h1>
      <NavBar />
    </header>
    <Form onAddCountry={onAddCountry}/>
    <CountryList 
    countries={countries}
    setCountries={setCountries}
    />
  </>
  );
}

export default Home;
