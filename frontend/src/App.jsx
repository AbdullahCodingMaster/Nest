// src/App.jsx
import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
