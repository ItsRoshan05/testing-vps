import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://103.187.146.20/api/v1/") // nanti ini ganti ke URL backend di VPS
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Data dari backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
