import React, { Fragment} from "react"
import Main from "./Components/Main";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom" 
import Navbar from "./Components/Navbar";
import WebFont from "webfontloader"
import "@fontsource/lexend"; // Defaults to weight 400
import "@fontsource/lexend/400.css"; // Specify weight

function App() {
  

  React.useEffect(()=>{//it loads the fonts before the pages being loaded

    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
        
      }
    })

  },[]);
  return (
    <Router>
      <Navbar/>
        <Fragment>
        <Routes>
            <Route exact path="/" element={<Main/>} />
            {/* <Route exact path="/nav" element={<Navbar/>} /> */}
        </Routes>
        </Fragment>
    </Router>
    // <Router>
    //   <div style={{ display: 'flex' }}>
    //     {/* Left-side navigation panel with width 150px */}
    //     <div style={{ width: '150px', backgroundColor: '#f0f0f0' }}>
    //       <Navbar />
    //     </div>
        
    //     {/* Main content area */}
    //     <div style={{ flex: 1 }}>
    //       <Routes>
    //         {/* Routes for displaying different components */}
    //         <Route exact path="/home" component={<Main/>} />
    //         {/* <Route exact path="/component2" component={Component2} /> */}
    //         {/* Add more routes for other components as needed */}
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    
  );
}

export default App;
