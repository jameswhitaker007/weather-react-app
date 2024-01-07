import { useLoaderData, json } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cityActions } from "../store/index";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { weatherConstants } from "../constants";
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
import { useGetHour } from "../utils/utils";
import { useGetIcon } from "../utils/utils";
import { useCapitalizeWords } from "../utils/utils";
import HourComponent from "../components/hourComponent";
import { CardGroup } from "react-bootstrap";
import { useGetDay } from "../utils/utils";
import DayComponent from "../components/dayComponent";
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind_small.png';
import { useGetTime } from "../utils/utils";
import { Link } from "react-router-dom";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";

function CityDetails() {
    const [favorited, setFavorited] = useState(false);
    const data = useLoaderData();
    //console.log(data);
    const isDaytime = data.data.current.dt >= data.data.current.sunrise
        && data.data.current.dt < data.data.current.sunset;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const recents = useSelector(state => state.recents);
    console.log(favorites);


    const isFavorited = () => {
        console.log(favorites);
        let found = false;
        favorites.map((favorite) => {
            console.log('favorite.id: ' + favorite.id + " helperDataId: " + data.helperData.id);
            if (favorite.id === data.helperData.id) {
                found = true;
                return
            }
        });

        console.log(found);
        return found;
    }

    useEffect(() => {
        setFavorited(isFavorited());
    },[favorites])

    useEffect(() => {
        setFavorited(isFavorited());
    }, [data])

    function addRecentHandler() {
        dispatch(cityActions.addRecents(data.helperData));
    }

    useEffect(() => {
        addRecentHandler();
    }, [data])


    function addFavoriteHandler() {
        //setFavorited(true);
        dispatch(cityActions.addFavorites(data.helperData));
        console.log('inside addFavorite function');
        console.log(favorites);
    }

    function removeFavoriteHandler() {
        //setFavorited(false);
        dispatch(cityActions.removeFavorites(data.helperData.id));
        console.log('inside removeFavorite function');
        console.log(favorites);
    }

    const capitalizedWeatherDescription = useCapitalizeWords(data.data.current.weather[0].description);
    const icon = useGetIcon(data.data.current.weather[0].id, isDaytime);

    console.log(recents);

    return (
        <>
            <Row className="mt-3">
                <div className="jumbotron">
                    <p>{Math.round(data.data.current.temp)}<span>&#176;</span></p>
                    <p>{capitalizedWeatherDescription}</p>
                    <p>{data.helperData.city}</p>
                    <p>{Math.round(data.data.daily[0].temp.min)}<span>&#176;</span>{'/' + Math.round(data.data.daily[0].temp.max)}
                        <span>&#176;</span>{' Feels like ' + Math.round(data.data.current.feels_like)}
                        <span>&#176;</span></p>
                    <img src={icon} />
                    {favorited ? <button style={{ border: 0, backgroundColor: 'transparent' }} onClick={removeFavoriteHandler}><HeartFill size={40} /></button>
                        : <button style={{ border: 0, backgroundColor: 'transparent' }} onClick={addFavoriteHandler}><Heart size={40} /></button>}
                </div>
            </Row>
            <Row>
                <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
                    {data.data.hourly.map((hour, index) => {
                        return <HourComponent hour={hour} key={index} />
                    })}
                </div>
            </Row>
            <Row className="mt-5">
                {data.data.daily.map((day, index) => {
                    return <DayComponent day={day} index={index} key={index} />
                })}
            </Row>
            <Row className="mt-3">
                <Col xs={6}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <div>
                            <img src="https://openweathermap.org/img/wn/01d@4x.png" />
                        </div>
                        <p className="mb-1">UV index</p>
                        <p>{data.data.current.uvi}</p>
                    </div></Col>
                <Col xs={6}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <img src={humidityIcon} />
                        <p className="mb-1">Humidity</p>
                        <p>{data.data.current.humidity}&#37;</p>
                    </div>

                </Col>
                <Col xs={6}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <img src={windIcon} />
                        <p className="mb-1">Wind</p>
                        <p>{data.data.current.wind_speed} km/h</p>
                    </div>
                </Col>
                <Col xs={6}>
                    <Container>
                        <Row>
                            <Col xs={{ span: 3, offset: 3 }}>
                                <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                                    <img src="https://openweathermap.org/img/wn/01d@4x.png" />
                                </div>
                                <p className="d-flex justify-content-center mb-1">Sunrise</p>
                                <p className="d-flex justify-content-center">{useGetTime(data.data.current.sunrise)}</p>
                            </Col>
                            <Col xs={{ span: 3 }}>
                                <div className="d-flex justify-content-center">
                                    <img src="https://openweathermap.org/img/wn/01n@4x.png" />
                                </div>
                                <p className="d-flex justify-content-center">Sunset</p>
                                <p className="d-flex justify-content-center">{useGetTime(data.data.current.sunset)}</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </>
    )
}

export default CityDetails;