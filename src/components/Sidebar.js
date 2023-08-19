import React from 'react'
import "../components/sidebar.css"
const Sidebar = () => {
  
    return (
        <div className="sidebar">
          <div className="sidebar-header">Dashboard </div>
          <ul className="sidebar-menu">
            <li>Home</li>
            <li>Charts</li>
            <li>Filters</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      );
  
}

export default Sidebar