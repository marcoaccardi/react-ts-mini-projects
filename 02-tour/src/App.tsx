import React, { useState } from "react";
import data from "./data";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState([]);
  return (
    <main>
      <h1>Tours Project</h1>
    </main>
  );
}

export default App;
