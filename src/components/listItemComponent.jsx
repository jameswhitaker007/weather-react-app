import { useEffect, useState, useRef } from "react";
import { Link, json, useNavigate, NavLink } from "react-router-dom";
import City from "../routes/city";

/*
<div key={index} className="p-2">
      <strong>{city.substring(0, input.length)}</strong>
      {city.substring(input.length)}
    </div>
*/

export default function List_item(props) {
  const { index, city, inputLength } = props;
  const refDiv = useRef();

  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/city");
  }
 /*
  useEffect(() => {
    //const listItem = document.getElementById(city);
    //const hiddenValue = document.getElementById(city+index).value;
    //setCurrentValue(hiddenValue);
    refDiv.current.addEventListener("click", (e) => {
      e.stopPropagation();
      //console.log(refDiv.current.getAttribute('data-lat'));
      //console.log(refDiv.current.data.lon)
      console.log(refDiv.current.id + " has been clicked");
      //navigate(`city/lat=${e.data-lat}&long=${data-lon}`);
    });
  }, [city]);*/
  return (
    <div
      key={index}
      className="p-2"
      id={city.name}
      ref={refDiv}
      data-lat={city.lat}
      data-lon={city.lon}
    >
      <NavLink to={`/city/${city.lat}/${city.lon}`} style={{ textDecoration: "none" }}>
        <strong>{city.name.substring(0, inputLength)}</strong>
        {city.name.substring(inputLength)}
        <input type="hidden" value={city.name} id={city.name + "HiddenValue"} />
      </NavLink>
    </div>
  );
}

export async function loader({ request, params }) {
  const lat = params.lat;
  const lon = params.lon;
  const APIKey = 'b0d840881f772cb22ba10f3d2a717b1e';
  console.log("lat= " + lat +", lon= " + lon);

  const response = await fetch(
  `http://pro.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lon}&units=metric&APPID=${APIKey}`
   
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    //console.log(response);
    //console.log(response.json());
    const data = await response.json();
   console.log(data);
    //response.then(result => console.log(result.data));
    return data;
  }
}
