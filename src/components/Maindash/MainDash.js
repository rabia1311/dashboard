import "../Maindash/maindash.css"
import React from 'react'
import Cards from "../Cards/Cards"
import Barchat from "../Charts/Barchat"
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1 style={{ textAlign: 'center', backgroundColor: 'lightblue', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', padding: '10px' }}> VISUALIZATION DASHBOARD</h1>
        <Cards/>
        <hr></hr>
        <Barchat/>

    </div>
  )
}

export default MainDash