import React, { useState } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import CountryList from "../pages/CountryList";

function Home() {
const [countries, setCountries] = useState([])
  
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
    <Form />
    <CountryList 
    countries={countries}
    setCountries={setCountries}
    />
  </>
  );
}

export default Home;
