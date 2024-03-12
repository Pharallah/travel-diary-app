import React from "react";
import NavBar from "./NavBar";
import Form from "./Form";

function Home() {
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
    </>
  );
}

export default Home;
