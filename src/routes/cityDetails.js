import { useLoaderData, json } from "react-router-dom";

function CityDetails() {
const data = useLoaderData();
console.log(data);


    return(
        <>
        <div><h1>City Details Page</h1></div>
        <div>{data.current.weather[0].description}</div>
        </>
    )
}

export default CityDetails;