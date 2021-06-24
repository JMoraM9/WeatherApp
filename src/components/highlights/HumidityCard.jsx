import React from 'react'

export const HumidityCard = ({ title, data }) => {
    return (
        <div className="highlight__card">
            <h3 className="highlight__card-title">{ title }</h3>

            <p className="highlight__card-info">
                { data }
                <span className="units"> %</span>
            </p>

            <div className="humidity__bar">
                <div className="humidity__bar-filled" style={{ width: `${ data }%` }}></div>
                <span className="humidity__bar-text">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </span>
            </div>
        </div>
    )
}
