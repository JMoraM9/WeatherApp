import React, { useReducer } from 'react'
import { WeekScreen } from './components/forecast/WeekScreen';
import { HighlightsScreen } from './components/highlights/HighlightsScreen';
import { TodayScreen } from './components/TodayScreen';
import './styles/styles.scss';
import { weatherContext } from './weather/weatherContext';
import { weatherReducer } from './weather/weatherReducer';


export const WeatherApp = () => {

    const initialState = {
        city: "Medellin",
        coords: {
            latitude: 6.239259199999999,
            longitude: -75.60915829999999,
        },
    };

    const [state, dispatch] = useReducer(weatherReducer, initialState);
    return (
        <>
            <weatherContext.Provider value={{ state, dispatch }}>
                <TodayScreen />
                
                <div className="main">
                    <WeekScreen />

                    <HighlightsScreen />
                </div>
            </weatherContext.Provider>

        </>
    )
}
