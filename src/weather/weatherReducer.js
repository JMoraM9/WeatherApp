import { types } from "../types/types";


// const state = {
//     coords: {
//         lat,
//         lng,
//     },
//     city,
//     weather: {
//         main,
//         temperature,
//     }
// }

export const weatherReducer = (state={}, action) => {

    switch (action.type) {
        case types.getCoords:
            return {
                ...state,
                coords: action.payload,
            }
        case types.getCity:
            return {
                ...state,
                city: action.payload
            }
        case types.getWeather:
            return {
                ...state,
                weather: {
                    ...action.payload,
                }
            }
        case types.getForecast:
            return {
                ...state,
                forecast:  [ ...action.payload ]
            }
        default:
            return state;
    }


};
