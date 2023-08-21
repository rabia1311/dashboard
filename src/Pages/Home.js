import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import "../../src/App.css";
import MainDash from "../components/Maindash/MainDash";
import Updates from "../components/Update/Updates";
const Home = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<MainDash/>
<Updates/>
      </div>  
    </div>
  )
}

export default Home