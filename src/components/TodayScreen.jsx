import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { getImage } from '../selectors/getImage';
import { types } from '../types/types';
import { weatherContext } from '../weather/weatherContext';


export const TodayScreen = () => {

    
    const { state, dispatch } = useContext(weatherContext);

    const getCoords = () => {
        navigator.geolocation.getCurrentPosition( async (position) => {
            dispatch({
                type: types.getCoords,
                payload: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
        });
    };

    useEffect( () => {

        const fetchData = async () => {

            if ( state.coords ) {

                try {
                    
                    const locationAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ state.coords.longitude },${ state.coords.latitude }.json?access_token=pk.eyJ1IjoianJtb3JhbSIsImEiOiJja3ByNWo5ZGIwMXNqMnVtdmc3YWNta3l5In0.Sb5b6IfOFX1286wMXBqNxA&limit=1&types=place`;
            
                    const locationResponse = await fetch(locationAPI);
                    const { features } = await locationResponse.json();
                    
                    dispatch({
                        type: types.getCity,
                    payload: features[0]?.text,
                    });

                } catch (error) {
                    console.log( error );
                }
                
            }
        };

        fetchData();

    }, [state.coords, dispatch]);

    useEffect( () => {

        const fetchData = async () => {

            if ( state.coords ) {

                try {
              
                    const instance = axios.create({
                        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                        params: {
                            appid: `f0fb9d9d214577295562f8baa54b5fc2`,
                            units: `metric`,
                            lat: state.coords.latitude,
                            lon: state.coords.longitude,
                        }
                    });
                    const resp = await instance.get();
                    const {wind, visibility, main, weather} = await resp.data;
                    dispatch({
                        type: types.getWeather,
                        payload: {
                            description: weather[0].description,
                            temperature: Math.round(main.temp),
                            windStatus: (wind.speed*1).toFixed(2),
                            airPressure: (main.grnd_level*0.00098692).toFixed(2),
                            humidity: main.humidity,
                            visibility: (visibility/1000),
                        }
                    });

                } catch (error) {
                    console.log( error );
                }
            };

        };

        fetchData();

    }, [state.coords, dispatch]);


    return (
        <aside className="weather__sidebar section">
            <div className="weather__sidebar-navbar">
                <button
                    className="search-btn btn pointer"
                >
                    Search for places
                </button>

                <button
                    className="location-btn btn pointer"
                    onClick={ () => {
                        getCoords()
                    } }
                >
                    <span className="material-icons gps-btn">
                        my_location
                    </span>
                </button>
            </div>

            <div className="weather__sidebar-image">
                <img src={ getImage( state.weather?.description ) } alt={`${ state.weather?.description }`} />
            </div>

            <div className="weather__sidebar-info">
                <h2 className="temperature">
                    { state.weather?.temperature }
                    <span className="unity">&deg;C</span>
                </h2>
                <h3 className="weather">{ state.weather?.description }</h3>
                <div className="date">
                    <span>Today</span>
                    <span>&nbsp;&nbsp; • &nbsp;&nbsp;</span>
                    <span>{ moment().format("ddd, D, MMM") }</span>
                </div>
                <span className="city">
                    <span className="material-icons">location_on</span>{ state?.city }
                </span>
            </div>
        </aside>
    )
}
