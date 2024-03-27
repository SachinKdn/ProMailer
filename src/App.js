import React, { useEffect, useState } from "react"
import './App.css';
import Main from "./Components/Main";

function App() {
  const [obtainedData, setObtainedData] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch('https://promailer-backend.onrender.com/');
      // const response = await fetch('http://localhost:3000/');
      const data = await response.json();
      console.log(data)
      setObtainedData(data.title);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
        <h2>Sachin Kadian Heading Page</h2>
        <p>{obtainedData}</p>
        <Main/>
        {/* {users.map((user) => (
      <p key={user.id}>{user.name}</p>
    ))} */}
    </div>
  );
}

export default App;
