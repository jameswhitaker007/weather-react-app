import { useParams, Link } from "react-router-dom";
import { useLoaderData, json } from "react-router-dom";

export default function City() {
  const params = useParams();
  const resData = useLoaderData();
  const data = resData.events; //events is filler for now
  //params.params;

  return (
    <>
      <Link to=".." relative="path">
        Go Back
      </Link>
      <div>Hello City</div>
    </>
  );
}

export async function loader() {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
  );

  if (!response.ok) {
    //throw new Response(JSON.stringify({message: 'Could not fetch data.'}), {status: 500});
    throw json({ message: "Could not fetch data." }, { status: 500 });
  } else {
    //const resData = await response.json();
    //return resData;
    return response;
  }
}
