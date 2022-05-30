import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

const BarChart = ({ chartData, chartRef }) => {
    return (
        <div className="chart-block">
           <Bar data={chartData} ref={chartRef}/>
        </div>
    )
}

export default BarChart
