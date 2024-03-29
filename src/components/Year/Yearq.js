import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "../Year/year.css";
import axios from "axios";

const options = {
  chart: {
    title: "Published Year and intensity",
    
  },
};

const Yearq = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard/get")
      .then(response => {
        const apiData = response.data;
        // Extracting the added and published fields for the chart
        const chartData = apiData.map(item => [item.added, item.published, item.intensity]);
        setChartData([["Added", "Published", "Intensity"], ...chartData]);

        // Log the extracted data to the console
        console.log("Chart Data:", chartData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="chartcontainer">
      <h1>Year Graph Displayed</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <Chart
        chartType="Line"
        data={chartData}
        options={options}
       
      />
    </div>
  );
};

export default Yearq;
