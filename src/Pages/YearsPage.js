import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Yearq from '../components/Year/Yearq';
import Updates from '../components/Update/Updates';
const YearsPage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
    
        <Sidebar />
   <Yearq/>
   <Updates/>
      </div>
    </div>
  );
}

export default YearsPage;
