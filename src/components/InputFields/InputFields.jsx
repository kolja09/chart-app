import React from "react";

import './inputFields.css';

const InputFields = ({ setOptions, data, setAmount, setLabels, labels, amount, chartRef }) => {
    const handleChangeChart = () => {
        const chart = chartRef.current;
        if (chart) {
            setOptions(data)
        };
    };

    const handleChangeLabels = (e) => {
        setLabels(e.target.value.replace(/\s/g, "").split(','));
    };

    const handleChangeAmount = (e) => {
        setAmount(e.target.value.replace(/[^\d\,]/g, "").split(',').map((el) => +el))
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleChangeChart();
        }
    };

    return (
        <div className="input-container">
            <div className="input-block">
                <label>X axis labels:</label>
                <input
                    type='text'
                    value={labels}
                    onChange={handleChangeLabels}
                    onBlur={handleChangeChart}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="input-block">
                <label>Y axis values:</label>
                <input
                    type='text'
                    value={amount}
                    onChange={handleChangeAmount}
                    onBlur={handleChangeChart}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}

export default InputFields
