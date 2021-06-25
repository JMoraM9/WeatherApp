<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { TodayScreen } from './components/TodayScreen';

import useAxios from 'axios-hooks'
=======
import React, { useReducer } from 'react'
import { WeekScreen } from './components/forecast/WeekScreen';
import { HighlightsScreen } from './components/highlights/HighlightsScreen';
import { TodayScreen } from './components/TodayScreen';
>>>>>>> temp
import './styles/styles.scss';
import { weatherContext } from './weather/weatherContext';
import { weatherReducer } from './weather/weatherReducer';


export const WeatherApp = () => {

<<<<<<< HEAD
    const [coords, setCoords] = useState({});
    const [loadingCoords, setLoadingCoords] = useState(false);
    const [city, setCity] = useState("Medellin");

    const Mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng}, ${coords.lat}.json?access_token=pk.eyJ1IjoianJtb3JhbSIsImEiOiJja3ByNWo5ZGIwMXNqMnVtdmc3YWNta3l5In0.Sb5b6IfOFX1286wMXBqNxA&limit=1&types=place`;

    const OpenWeather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0fb9d9d214577295562f8baa54b5fc2&units=metric`;

    const [, getLocation] = useAxios( Mapbox_url, { manual: true } );

    const [{ data }, getWeather, manualCancel] = useAxios( OpenWeather_url );

    useEffect(() => {
        getWeather()
            .catch( (err) => console.log(err) );
        
    }, [city])

    useEffect(() => {
        if (coords.lat){
            getLocation()
                .then( ({data: {features}}) => {
                    //Obtener el clima
                    setCity( features[0].text )
                })
                .catch( err => console.log(err))
        }
    }, [coords, getLocation, getWeather])

    console.log(coords);

    return (
        <>
            <TodayScreen
                weather={ data?.weather }
                city={ city }
                setCoords={ setCoords } 
                setLoadingCoords={ setLoadingCoords }
            />
=======
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
                
                <WeekScreen />

                <HighlightsScreen />
            </weatherContext.Provider>

>>>>>>> temp
        </>
    )
}
