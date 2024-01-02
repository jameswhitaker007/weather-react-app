import { useLoaderData, json } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cityActions } from "../store/index";

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

    return (
        <>
            <div><h1>City Details Page</h1></div>
            <div>{data.current.weather[0].description}</div>
            <div>
                <button onClick={{addFavoriteHandler}}>Add Favorite</button>
            </div>
        </>
    )
}

export default CityDetails;