import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import Pestle from '../components/FilterTable/Pestle';
const PestleFilter = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<Pestle/>
<Updates/>
      </div>  
    </div>
  )
}

export default PestleFilter;