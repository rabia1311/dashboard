import React from "react";
import { Chart } from "react-google-charts";
import "../Year/year.css"
const data = [
    ["Sales", "Expenses", "Profit"],
    ["2016", 1000, 400, ],
    ["2017", 1100, 600, ],
    ["2018", 900, 300, ],
    ["2019", 1200, 1000, ],
    ["2020", 800, 100, ],
  ];
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2016-2020",
    },
  };
  const Yearq=()=>{
    return (
    
        <div  className="chart-container">
        
          <Chart
            chartType="Line"
            data={data}
            options={options}
            width="100%"
            height="500px"
          />
        </div>
      );
    };
  export default Yearq;