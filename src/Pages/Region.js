import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import RegionChart from '../components/Charts/RegionChart';

const Region = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<RegionChart/>
<Updates/>
      </div>  
    </div>
  )
}

export default Region