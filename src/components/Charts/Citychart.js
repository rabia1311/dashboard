import React from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import "../Year/year.css"
const data = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];
  
  const options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
   
  };
  
  function CityChart() {
    useEffect(() => {
      // Fetch data from the API
      axios.get("http://localhost:5000/dashboard/get")
        .then(response => {
          console.log("Fetched data:", response.data);  // Print the fetched data
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);  // Empty dependency array ensures the effect runs only once
  
    return (
      <Chart
        className="chart-container"
        chartType="ComboChart"
        data={data}
        options={options}
      />
    );
  }
  
  export default CityChart; 