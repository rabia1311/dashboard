import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import Updates from '../components/Update/Updates';
import CityChart from '../components/Charts/Citychart';
import "../../src/App.css"
const City = () => {
  return (

    <div className="App">
    <div className="AppGlass">
  
      <Sidebar />
 <CityChart/>
 <Updates/>
    </div>
  </div>
  )
}

export default City