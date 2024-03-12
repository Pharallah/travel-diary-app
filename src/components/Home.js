import React from "react";
import NavBar from "./NavBar";

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
    </>
  );
}

export default Home;
