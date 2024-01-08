import clearDayIcon from '../assets/clear_day.png';
import clearNightIcon from '../assets/clear_night.png';
import cloudsDayIcon from '../assets/clouds_day.png';
import cloudsNightIcon from '../assets/clouds_night.png';
import fogIcon from '../assets/fog.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import squallIcon from '../assets/squall.png';
import thunderIcon from '../assets/thunder.png';
import tornadoIcon from '../assets/tornado.png';



export function useCapitalizeWords(words) {
    const wordArr = words.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substr(1);
    }
    return wordArr.join(' ');
}

export const useGetTime = (dt) => {
    return new Date(dt * 1000).toLocaleString([], {
        hour: 'numeric',
        hour12: true,
        hourCycle: 'h12',
        minute: 'numeric'
    })
}

export const useGetHour = (dt) => {
    const timestamp = dt * 1000;
    return new Date(timestamp).toLocaleString([], {
        
        hour: 'numeric',
        hourCycle: 'h12'
    });

}

export const useGetIcon = (id, isDayTime) => {

    if (id >= 200 && id <= 232) { //Thunderstorm
        return thunderIcon;
    }
    if (id >= 300 && id <= 321) { //Drizzle
        return rainIcon;
    }
    if (id >= 500 && id <= 531) { //Rain
        return rainIcon;
    }
    if (id >= 600 && id <= 622) { //Snow
        return snowIcon;
    }
    if (id >= 701 && id <= 762) { //Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash
        return fogIcon;
    }
    if (id == 771) { // Squall
        return squallIcon;
    }
    if (id == 781) { // Tornado
        return tornadoIcon;
    }
    if (id == 800) {
        if (isDayTime) {
            return clearDayIcon;
        } else {
            return clearNightIcon;
        }
    }
    if (id >= 801 && id <= 804) {
        if (isDayTime) {
            return cloudsDayIcon;
        } else {
            return cloudsNightIcon;
        }
    }
}

export const useIsDaytime = (dt) => {
    const timestamp = dt * 1000;
    const hours = new Date(timestamp).getHours();
    console.log(hours);
    const isDayTime = hours >= 6 && hours < 18;
    return isDayTime;
}

export const useGetDay = (dt) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //const timestamp = dt * 1000;
    const day = new Date(dt * 1000).getDay();
    return weekday[day];
}

export const useGetDate = () => {
    return new Date().toLocaleString([],{
        dateStyle: 'medium'

    })
}
