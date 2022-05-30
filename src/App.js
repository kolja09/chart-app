import React, { useState, useRef } from "react";

import './App.css';

import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import RadioInputs from "./components/InputButtons/InputButtons";
import InputFields from "./components/InputFields/InputFields";

const App = () => {
  const chartRef = useRef(null);

  const [chartView, setChartView] = useState(false);
  const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May']);
  const [amount, setAmount] = useState([65, 59, 80, 81, 56]);
  const data = {
    labels: labels,
    datasets: [{
      label: 'Chart',
      data: amount,
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(255, 205, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(201, 203, 207, 0.4)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2,
    }],
  };
  const [options, setOptions] = useState(data);

  return (
    <div className="container">
      <InputFields
        setAmount={setAmount}
        setLabels={setLabels}
        setOptions={setOptions}
        labels={labels}
        amount={amount}
        chartRef={chartRef}
        data={data}
      />
      <div className="chart-container">
        {
          !chartView
            ? <BarChart chartData={options} chartRef={chartRef} />
            : <LineChart chartData={options} chartRef={chartRef} />
        }
      </div>
      <RadioInputs chartView={chartView} setChartView={setChartView} />
    </div>
  )
}

export default App
