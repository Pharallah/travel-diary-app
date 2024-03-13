import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import CountryList from "../components/CountryList";

function Main() {
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
    <header className="headers">
      <h1>
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

export default Main;
