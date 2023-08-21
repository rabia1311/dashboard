import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import Topicchart from '../components/Charts/Topicchart';

const Topic = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<Topicchart/>
<Updates/>
      </div>  
    </div>
  
  )
}

export default Topic