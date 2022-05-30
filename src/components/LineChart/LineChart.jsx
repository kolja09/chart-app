import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

const LineChart = ({ chartData, chartRef }) => {
    return (
        <div className="chart-block">
           <Line data={chartData} ref={chartRef} />
        </div>
    )
}

export default LineChart
