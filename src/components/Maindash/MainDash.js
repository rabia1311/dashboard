import "../Maindash/maindash.css"
import React from 'react'
import Cards from "../Cards/Cards"
import Barchat from "../Charts/Barchat"
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <hr></hr>
        <Barchat/>

    </div>
  )
}

export default MainDash