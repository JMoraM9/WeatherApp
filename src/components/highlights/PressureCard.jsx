import React from 'react'

export const PressureCard = ({ title, data }) => {
    return (
        <div className="highlight__card">
            <h3 className="highlight__card-title">{ title }</h3>

            <p className="highlight__card-info">
                { data }
                <span className="units"> atm</span>
            </p>
        </div>
    )
}
