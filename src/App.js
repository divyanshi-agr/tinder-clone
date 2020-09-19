import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* tinder cards */}
      <TinderCards />
      {/* swipe buttons */}
    </div>
  );
}

export default App;
