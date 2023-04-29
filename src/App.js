import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Desenvolvedores";

function App() {
  return (
    <div >
      <NavBar/>
      <Hero />
      <About />
      <Developers />
    </div>
  );
}

export default App;
