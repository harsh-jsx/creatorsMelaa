import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Clients from "./Components/OurClients/Clients";
import Creators from "./Components/Creators/Creators";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Offers from "./Components/WhatWeOffer/Offers";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div id="smooth-wrapper">
      {loading && <Loader setLoading={setLoading} />}
      <div id="smooth-content">
        <Cursor />
        <Navbar />
        <Home />
        <Creators />
        <Clients />
        <Offers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
