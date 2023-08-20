import React from "react";
import { Chart } from "react-google-charts";
const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2016", 1000, 400, 200],
    ["2017", 1100, 600, 250],
    ["2018", 900, 300, 300],
    ["2019", 1200, 1000, 200],
    ["2020", 800, 100, 400],
  ];
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2016-2020",
    },
  };
  const Barchat=()=>{
    return (
        <div>
          <Chart
            chartType="Bar"
            data={data}
            options={options}
            width="100%"
            height="500px"
          />
        </div>
      );
    };
  export default Barchat;