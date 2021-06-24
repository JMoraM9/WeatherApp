import moment from 'moment'
import React from 'react'
import { getImage } from '../../selectors/getImage'


export const DayCard = ({
    date,
    description,
    weatherId,
    minTemp,
    maxTemp,
}) => {
    return (
        <div className="card__container">
            <h3 className="card__container-date">
                { moment( date ).format("ddd, D MMM") }
            </h3>

            <div className="card__container-image">
                <img src={ getImage( weatherId )} alt={ description } />
            </div>

            <div className="card__container-temperatures">
                <span className="max-temp">
                    { maxTemp }
                    <span className="unit">
                        °C
                    </span>
                </span>
                <span className="min-temp">
                    { minTemp }
                    <span className="unit">
                        °C
                    </span>
                </span>
            </div>
            
        </div>
    )
}
