import React, { useState } from "react";
import Loader from "./Components/Loader/Loader";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Clients from "./Components/OurClients/Clients";
import Creators from "./Components/Creators/Creators";
import Home from "./Pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      <div style={{ display: loading ? "none" : "block" }}>
        <Cursor />
        <Navbar />
        <Home />
        <Creators />
        <Clients />
      </div>
    </>
  );
}

export default App;