import React, { useContext } from 'react';
import { weatherContext } from '../../weather/weatherContext';
import { HumidityCard } from './HumidityCard';
import { PressureCard } from './PressureCard';
import { VisibilityCard } from './VisibilityCard';
import { WindCard } from './WindCard';

export const HighlightsScreen = () => {

    const { state } = useContext(weatherContext);

    return (
        <div className="highlights">
            <h2 className="highlights-title">Today's highlights</h2>
            <div className="highlights__container">

                <WindCard title={ "wind status" } data={ state.weather?.windStatus } />

                <HumidityCard title={ "humidity" } data={ state.weather?.humidity } />

                <VisibilityCard title={ "visibility" } data={ state.weather?.visibility } />

                <PressureCard title={ "air pressure" } data={ state.weather?.airPressure } />

            </div>
        </div>
    )
}
