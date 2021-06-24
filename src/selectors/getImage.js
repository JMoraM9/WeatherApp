import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import HeavyRain from "../assets/images/HeavyRain.png";
import LightCloud from "../assets/images/LightCloud.png";
import LightRain from "../assets/images/LightRain.png";
import Shower from "../assets/images/Shower.png";
import Snow from "../assets/images/Snow.png";
import Thunderstorm from "../assets/images/Thunderstorm.png";

export const getImage = ( weather ) => {
    switch (weather) {
        case 'clear sky':
            return Clear

        case 'few clouds':
            return LightCloud

        case 'scattered clouds':
            return LightCloud
            
        case 'broken clouds':
            return HeavyCloud
        
        case 'shower rain':
            return Shower

        case 'moderate rain':
            return Shower
    
        case 'rain':
            return HeavyRain        

        case 'thunderstorm':
            return Thunderstorm

        case 'snow':
            return Snow

        case 'mist':
            return LightRain

        default:
            return Clear;
    }
}