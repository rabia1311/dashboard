import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import Updates from '../components/Update/Updates';
import Countrychart from "../components/Charts/Countrychart"
import "../../src/App.css"
const Country = () => {
  return (
    
    <div className="App">
    <div className="AppGlass">
  
      <Sidebar />
 <Countrychart/>
 <Updates/>
    </div>
  </div>
  )
}

export default Country