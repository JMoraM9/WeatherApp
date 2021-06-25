import React from 'react'

export const WindCard = ({ title, data}) => {

    return (
        <div className="highlight__card">
            <h3 className="highlight__card-title">{ title }</h3>

            <p className="highlight__card-info">
                { data?.speed }
                <span className="units"> m/s</span>
            </p>

            <div className="wind-direction">
                <div className="circle">
                    <span className="material-icons navigation-icon" style={{ transform: `rotate(${ data?.direction }deg)` }}>
                        navigation
                    </span>
                </div>
            </div>
        </div>
    )
}
