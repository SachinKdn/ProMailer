import React, { Fragment, useEffect, useState } from "react"
import './Main.css';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom" 


const Main = () => {
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
        console.log("Rendered")
      fetchData();
    }, []);

  return (
    <div className="Main">
        <h2>Sachin Kadian Heading Page</h2>
        <p>{obtainedData}</p>
        {/* {users.map((user) => (
      <p key={user.id}>{user.name}</p>
    ))} */}
    </div>
    
  )
}

export default Main