import React from "react"

//import the desired component from the Chart.js library
import {Bar} from "react-chartjs-2" 
//construct the data object using the appropriate properties and data set
import myData from '../data.json';
import { Chart, registerables } from 'chart.js';
import { useState } from "react";
Chart.register(...registerables); 


const ChartPage = () => {
  const [chartData, setChartData] = useState({
    labels: myData.map((data) => data.day),
    datasets: [
      {
        label:"",
        data: myData.map((data) => data.amount),
        backgroundColor: getBgColors(),
        borderRadius: 3,
        hoverBackgroundColor: getBgColors(),
      },
    ],
  });
  function getBgColors() {
    var array  = myData.map((data) => data.amount);
    var maxValue = Math.max.apply(this, array);
    
    var bg = array.map(a => a === maxValue ? "#75B2B8" : "#F58972");
    console.log(bg);
    return bg;
  }
  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
     legend: {
      display: false
    },
    tooltip: {
      callbacks: {
          label: function(context) {
              let label = '';

              if (label) {
                  label += ': ';
              }
              if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              }
              return label;
          }
      }
  },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length === 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length === 0) {
        event.native.target.style.cursor = "default";
      }
    },
  });
  return (
    <div className="w-full">
      <Bar data={chartData}  options={chartOptions} />
    </div>
  )
}

export default ChartPage;
