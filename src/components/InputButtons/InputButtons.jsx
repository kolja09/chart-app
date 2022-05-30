import React from "react";

import './inputButtons.css';

const RadioInputs = ({ setChartView, chartView }) => {

    const clickOnBarChart = () => {
        setChartView(false);
    };

    const clickOnLineChart = () => {
        setChartView(true);
    };

    return (
        <div className="inputs-block">
            <div className="input-radio">
                <input checked={!chartView} onChange={clickOnBarChart} type='radio' name="contact" />
                <label>Bar Chart</label>
            </div>
            <div className="input-radio">
                <input onChange={clickOnLineChart} type='radio' name="contact" />
                <label>Line Chart</label>
            </div>
        </div>
    )
}

export default RadioInputs
