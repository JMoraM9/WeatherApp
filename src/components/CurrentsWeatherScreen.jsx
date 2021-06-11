import React, { useState } from 'react'
import { weatherImages } from '../helpers/weatherImages'

export const CurrentsWeatherScreen = () => {

    return (
        <aside className="weather__sidebar">
            <div className="weather__sidebar-navbar">
                <button
                    className="search-btn btn"
                >
                    Search for places
                </button>

                <button
                    className="location-btn btn"
                >
                    <span className="material-icons gps-btn">
                        my_location
                    </span>
                </button>
            </div>

            <div className="weather__sidebar-image">
                <img src={ weatherImages(`./Clear.png`).default } alt="" />
            </div>

            <div className="weather__sidebar-info">
                <h2 className="temperature">
                    15<span className="unity">&deg;C</span>
                </h2>
                <h3 className="weather">Soleado</h3>
                <div className="date">
                    <span>Viernes</span>
                    <span>Fri. 5 Jun</span>
                </div>
                <span className="city">
                    <span className="material-icons">location_on</span>Ciudad actual
                </span>
            </div>
        </aside>
    )
}
