import React from "react";
import { Chart } from "react-google-charts";
import "../Year/year.css"
const data = [
  ["ID", "X", "Y", "Temperature"],
  ["", 80, 167, 120],
  ["", 79, 136, 130],
  ["", 78, 184, 50],
  ["", 72, 278, 230],
  ["", 81, 200, 210],
  ["", 72, 170, 100],
  ["", 68, 477, 80],
];

const options = {
  colorAxis: { colors: ["yellow", "red"] },
 // Adjust the height here
};

function Topicchart() {
  return (
    <Chart
    className="chart-container"
      chartType="BubbleChart"
    
      data={data}
      options={options}
    />
  );
}

export default Topicchart;
