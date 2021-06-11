import React, { useEffect, useState } from 'react'
import { TodayScreen } from './components/TodayScreen';

import useAxios from 'axios-hooks'
import './styles/styles.scss';

export const WeatherApp = () => {

    const [coords, setCoords] = useState({});
    const [loadingCoords, setLoadingCoords] = useState(false);
    const [city, setCity] = useState("Medellin");

    const Mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng}, ${coords.lat}.json?access_token=pk.eyJ1IjoianJtb3JhbSIsImEiOiJja3ByNWo5ZGIwMXNqMnVtdmc3YWNta3l5In0.Sb5b6IfOFX1286wMXBqNxA&limit=1&types=place`;

    const OpenWeather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0fb9d9d214577295562f8baa54b5fc2`;

    const [, getLocation] = useAxios( Mapbox_url, { manual: true } );

    const [{ data }, getWeather, manualCancel] = useAxios( OpenWeather_url );

    useEffect(() => {
        getWeather()
            .catch( (err) => console.log(err) )
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

    console.log(data);

    return (
        <>
            <TodayScreen
            city={ city }
                setCoords={ setCoords } 
                setLoadingCoords={ setLoadingCoords }
            />
        </>
    )
}
