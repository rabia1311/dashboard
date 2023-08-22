import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import Endyear from '../components/FilterTable/Endyear';
const Endpage = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<Endyear/>
<Updates/>
      </div>  
    </div>
  )
}

export default Endpage;