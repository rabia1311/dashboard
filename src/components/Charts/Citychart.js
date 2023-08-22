import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "../Year/year.css"
const Citychart = () => {
  const [chartData, setChartData] = useState([]);

  const options = {
    title: "Intensity",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/dashboard/get")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of objects
        setChartData(data);

        // Print the "intensity" field from each data object in the console
        data.forEach((item) => {
          console.log("Intensity:", item.intensity);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Convert the fetched data to the format expected by the chart
  const chartDataTable = [
    ["Element", "Intensity", { role: "style" }, { sourceColumn: 0, role: "annotation", type: "string", calc: "stringify" }],
    ...chartData.map((item) => [item.title, item.intensity, "#b87333", null]),
  ];

  return (
    <div>
      <h1>Intensity Graph</h1>
      <hr></hr>
      <br></br>
      <br></br> <br></br>
      <Chart chartType="BarChart" className="chartcontainer"  data={chartDataTable} options={options} />
    </div>
  );
};

export default Citychart;
