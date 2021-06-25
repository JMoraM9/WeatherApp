import React, { useContext, useEffect } from 'react'
import { types } from '../../types/types';
import { weatherContext } from '../../weather/weatherContext';
import { DayCard } from './DayCard';

export const WeekScreen = () => {


    const { state, dispatch } = useContext(weatherContext);

    useEffect( () => {

        const fetchData = async () => {

            if ( state.city ) {

                try {
                    
                    const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${ state.city }&appid=27a6590f81ac6c5f728e8b50872237b9&units=metric`;
            
                    const forecastResponse = await fetch(forecastAPI);
                    const { list } = await forecastResponse.json();

                    const fiveDays = list.filter( (day, idx) => idx % 8 === 0 )

                    dispatch({
                        type: types.getForecast,
                        payload: fiveDays
                    })

                } catch (error) {
                    console.log( error );
                }
                
            }
        };

        fetchData();

    }, [state.city, dispatch]);

    return (
        <div className="forecast__container">
            {
                state.forecast?.map( day => (
                    <DayCard
                        key={ day.dt }
                        date={ day.dt_txt }
                        description={ day.weather[0].description }
                        weatherId = { day.weather[0].id }
                        minTemp={ Math.round(day.main.temp_min) }
                        maxTemp={ Math.round(day.main.temp_max) }
                    />
                ))
            }
        </div>
    )
}
