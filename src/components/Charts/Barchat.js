import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "Likelihood and Relevance",
    subtitle: "Displaying Likelihood and Relevance in a Bar Chart",
  },
};

const Barchat = () => {
  const [data, setData] = useState([
    ["Year", "Likelihood", "Relevance"],
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/dashboard/get")
      .then((response) => response.json())
      .then((fetchedData) => {
        // Assuming the fetchedData is an array of objects with "likelihood" and "relevance" properties
        console.log("Fetched data:", fetchedData);

        // Create the data array for the chart
        const chartData = fetchedData.map((item) => [item.year, item.likelihood, item.relevance]);

        // Add headers to the data array
        chartData.unshift(["Year", "Likelihood", "Relevance"]);

        setData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Chart chartType="Bar" data={data} options={options} width="100%" height="500px" />
    </div>
  );
};

export default Barchat;
