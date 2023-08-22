import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import "../../../src/Bar.css"
const RegionChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000/dashboard/get")
      .then((response) => response.json())
      .then((data) => {
        // Count occurrences of each region
        const regionCounts = {};
        data.forEach((item) => {
          const region = item.region;
          if (region) {
            regionCounts[region] = (regionCounts[region] || 0) + 1;
          }
        });

        // Convert region counts to chart data format
        const chartDataFormat = [["Region", "Count"]];
        Object.keys(regionCounts).forEach((region) => {
          chartDataFormat.push([region, regionCounts[region]]);
        });

        setChartData(chartDataFormat);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const options = {
    chart: {
      title: "Region Distribution",
      subtitle: "Count of Data Points by Region",
    },
  };

  return (
    <div>
      <Chart className="barchart"
        chartType="Bar"
        data={chartData}
        options={options}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default RegionChart;
