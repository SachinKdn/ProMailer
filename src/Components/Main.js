import React, { useEffect, useState } from "react"

const Main = () => {


    
  const [obtainedData, setObtainedData] = useState()

  const fetchData = async () => {
      try {
        const response = await fetch('https://promailer-backend.onrender.com/');
        // const response = await fetch('http://localhost:3000/check');
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
    <h2>Sachin Kadian Checking Page</h2>
    <p>{obtainedData}</p>

    {/* {users.map((user) => (
  <p key={user.id}>{user.name}</p>
))} */}
</div>
  )
}

export default Main