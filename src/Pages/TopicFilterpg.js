import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Updates from "../components/Update/Updates";
import Topicfilter from '../components/FilterTable/Topicfilter';
const TopicFilterpg = () => {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<Topicfilter/>
<Updates/>
      </div>  
    </div>
  )
}

export default TopicFilterpg ;