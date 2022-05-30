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
        setLabels(e.target.value.replace(/\s/g, "").split(','))

        e.target.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                handleChangeChart();
            }
        });
    };

    const handleChangeAmount = (e) => {
        setAmount(e.target.value.replace(/[^\d\,]/g, "").split(',').map((el) => +el))

        e.target.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                handleChangeChart();
            }
        });
    };

    return (
        <div className="input-container">
            <div className="input-block">
                <label>X axis labels:</label>
                <input
                    type={'text'}
                    value={labels}
                    onChange={handleChangeLabels}
                    onBlur={handleChangeChart}
                />
            </div>
            <div className="input-block">
                <label>Y axis values:</label>
                <input
                    type={'text'}
                    value={amount}
                    onChange={handleChangeAmount}
                    onBlur={handleChangeChart}
                />
            </div>
        </div>
    )
}

export default InputFields
