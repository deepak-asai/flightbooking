import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import { FlightSearch } from "./components/FlightSearch";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
