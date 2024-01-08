import Header from "../components/header";
import SearchBarComponent from "../components/searchBarComponent";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import CardGroupComponent from "../components/CardGroupComponent";

export default function Dashboard() {
  const favorites = useSelector((state) => state.favorites);
  const recents = useSelector((state) => state.recents);
  console.log(favorites);
  const APIKey = "b0d840881f772cb22ba10f3d2a717b1e";
  const [favoriteArr, setFavoriteArr] = useState([]);
  const [recentsArr, setRecentsArr] = useState([]);

  /*
  const setFavoriteWeatherData = async () => {
    const tempArr = [];
    await favorites.map(async (favorite) => {
      const response = await fetch(
        `http://pro.openweathermap.org/data/2.5/onecall?lat=${favorite.lat}&lon=${favorite.lon}&units=metric&APPID=${APIKey}`
      );
      if (!response.ok) {
        console.log("unable to load data");
      } else {
        const data = await response.json();
        tempArr.push(data);
      }
    });
    console.log(tempArr);
    setFavoriteArr([...tempArr]);
    console.log(favoriteArr);
  };

  useEffect(() => {
    setFavoriteWeatherData();
  },[]);*/

  return (
    <>
      <Row className="mt-5">
        <h3>Your Favorite Cities</h3>
        <div
          className="mt-3"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}
        >
          {favorites.length === 0 ? 
            <h5>Add favorite cities and they will appear here</h5> 
            : <CardGroupComponent data={favorites} />
          }
          
          
        </div>
      </Row>
      <Row className="mt-5">
        <h3>Recents</h3>
        <div
          className="mt-3"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}
        >
        {recents.length === 0 ? 
          <h5>Your recent searches will appear here</h5>
         : 
          <CardGroupComponent data={recents} />
        }</div>
      </Row>
    </>
  );
}
