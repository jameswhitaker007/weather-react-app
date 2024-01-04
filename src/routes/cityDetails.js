import { useLoaderData, json } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cityActions } from "../store/index";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";



function CityDetails() {

   

    const dispatch = useDispatch();
    const data = useLoaderData();
    console.log(data);
    const favorites = useSelector(state => state.favorites);
    const recents = useSelector(state => state.recents);

    const addFavoriteHandler = () => {
        dispatch(cityActions.addFavorites)
    }

    dispatch(cityActions.addRecents);

    const weatherDescription = data.data.current.weather[0].description;
    const wordArr = weatherDescription.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substr(1);
    }
    const capitalizedWeatherDescription = wordArr.join(' ');

    const iconurl = "http://openweathermap.org/img/w/" + data.data.current.weather[0].icon + ".png";

    window.myWidgetParam = [];
    window.myWidgetParam.push({ id: 11, cityid: '2643743', appid: 'b0d840881f772cb22ba10f3d2a717b1e', units: 'metric', containerid: 'openweathermap-widget-11', });
    (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
    window.myWidgetParam.push({ id: 15, cityid: '2643743', appid: 'b0d840881f772cb22ba10f3d2a717b1e', units: 'metric', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })()

    return (
        <>
            <Row className="mt-3">
                <Col><div id="openweathermap-widget-11"></div></Col>
                <Col><div id="openweathermap-widget-15"></div></Col>
            </Row>

            <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
        </>
    )
}

export default CityDetails;