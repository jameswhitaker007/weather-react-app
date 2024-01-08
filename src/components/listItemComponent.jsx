import { useEffect, useState, useRef } from "react";
import { Link, json, useNavigate, NavLink } from "react-router-dom";
import City from "../routes/city";

export default function List_item(props) {
  const { index, city, inputLength } = props;
  const refDiv = useRef();

  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/city");
  }

  return (
    <Link className="listItem"
    to={`/city/${city.name}/${city.country}/${city.lat}/${city.lon}/${city.id}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <strong>{city.name.substring(0, inputLength)}</strong>
      {city.name.substring(inputLength) + " " + city.country}
      <input type="hidden" value={city.name} id={city.name + "HiddenValue"} />
    </Link>
  );
}

export async function loader({ request, params }) {
  const lat = params.lat;
  const lon = params.lon;
  const city = params.name;
  const id = params.id;
  const country = params.country;
  const APIKey = "b0d840881f772cb22ba10f3d2a717b1e";
  console.log("lat= " + lat + ", lon= " + lon);

  const response = await fetch(
    `http://pro.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKey}`
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    const data = await response.json();
    const conditionedData = {
      helperData: {
        city,
        id,
        country,
        lat,
        lon,
      },
      data,
    };
    console.log(conditionedData);
    return conditionedData;
  }
}
