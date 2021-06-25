import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import HeavyRain from "../assets/images/HeavyRain.png";
import LightCloud from "../assets/images/LightCloud.png";
import LightRain from "../assets/images/LightRain.png";
import Shower from "../assets/images/Shower.png";
import Snow from "../assets/images/Snow.png";
import Thunderstorm from "../assets/images/Thunderstorm.png";
import Sleet from "../assets/images/Sleet.png";

export const getImage = ( id ) => {
    if ( '800'.includes( id ) ) {
        return Clear
    } else if ( '803,804'.includes( id ) ) {
        return HeavyCloud
    } else if ( '502,503,504,'.includes( id ) ) {
        return HeavyRain
    } else if ( '801,802'.includes( id ) ) {
        return LightCloud
    } else if ( '500,501,300,301,302,310,311,312,313,314,321'.includes( id ) ) {
        return LightRain
    } else if ( '520,521,522,531'.includes( id ) ) {
        return Shower
    } else if ( '511'.includes( id ) ) {
        return Sleet
    } else if ( '600,601,602,611,612,613,615,616,620,621,622'.includes( id ) ) {
        return Snow
    } else if ( '200,201,202,210,211,212,221,230,231,232'.includes( id ) ) {
        return Thunderstorm
    } else {
        return Clear
    }
}