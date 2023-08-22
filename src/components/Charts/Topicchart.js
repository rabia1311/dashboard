import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
const Topicchart = () => {
  const [chartData, setChartData] = useState([]);

  const options = {
    title: "Topic Distribution",
    is3D: true,
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/dashboard/get")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of objects
        setChartData(data.map(item => [item.topic, 1])); // Create a row for each topic
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[["Topic", "Count"], ...chartData]} // Include header and chartData
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Topicchart;
