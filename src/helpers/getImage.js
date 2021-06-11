// import Clear from "../assets/images/Clear.png";
// import Hail from "../assets/images/Hail.png";
// import HeavyCloud from "../assets/images/HeavyCloud.png";
// import HeavyRain from "../assets/images/HeavyRain.png";
// import LightCloud from "../assets/images/LightCloud.png";
// import LightRain from "../assets/images/LightRain.png";
// import Shower from "../assets/images/Shower.png";
// import Sleet from "../assets/images/Sleet.png";
import Snow from "../assets/images/Snow.png";
// import Thunderstorm from "../assets/images/Thunderstorm.png";

export const getImage = (weather) => {
    switch (weather) {
        case "sn":
            return Snow;
        
        default:
            return Snow;
            
    }
}
