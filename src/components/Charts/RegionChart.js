import React from "react";
import { Chart } from "react-google-charts";
import "../Year/year.css"
const data = [
  ["Dinosaur", "Length"],
  ["Acrocanthosaurus (top-spined lizard)", 12.2],
  ["Albertosaurus (Alberta lizard)", 9.1],
  ["Allosaurus (other lizard)", 12.2],
  ["Apatosaurus (deceptive lizard)", 22.9],
  // ... rest of the data ...
  ["Velociraptor (swift robber)", 1.8],
];

const options = {
  title: "Lengths of dinosaurs, in meters",
  legend: { position: "none" },
  colors: ["green"],

};

function RegionChart() {
  return (
    <Chart
    className="chart-container"
      chartType="Histogram"
      
      data={data}
      options={options}
    />
  );
}

export default RegionChart;
