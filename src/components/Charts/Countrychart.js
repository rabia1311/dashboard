import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import "../Year/year.css"
const options = {
  title: "Country Distribution",
  // Additional options for the pie chart
};

function Countrychart() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard/get")
      .then(response => {
        const countries = response.data.map(item => ({
          country: item.country,
          relevance: item.relevance,
        }));
        setCountryData(countries);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Chart
      className="chartcontainer"
      chartType="PieChart"
      data={[["Country", "Relevance"], ...countryData.map(item => [item.country, item.relevance])]}
      options={options}
    />
  );
}

export default Countrychart;
