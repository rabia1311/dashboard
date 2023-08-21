import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import FilterTable from '../components/FilterTable/FilterTable';
const Filter = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<FilterTable/>
<Updates/>
      </div>  
    </div>
  )
}

export default Filter