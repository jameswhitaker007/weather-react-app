/*export default function DropDownListComponent(input) {
  let data;
  //console.log(input.input);
  const getList = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: input.input,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/City?limit=10&order=name&keys=name,country&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja", // This is the fake app's application id
          "X-Parse-Master-Key": "TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH", // This is the fake app's readonly master key
        },
      }
    );
    
    data = await response.json(); // Here you have the data that you need
    console.log(JSON.stringify(data, null, 2));
   // console.log(data.results);
    return returnList(data.results);
  };
  const returnList = (results) => {
    //console.log(results);
    <ul>
      {results.map((city) => {
        //console.log(city);
        <li>{city.name}</li>;
      })}
    </ul>;
  };
  getList();
  console.log(data);
  return(
    <>
    {console.log(data)}
    <div>{JSON.stringify(data)}</div>
    </>
  )
}*/

import City from "../routes/city";

/*
const getList = async (input) => {
  const where = encodeURIComponent(
    JSON.stringify({
      name: {
        $regex: input.input,
      },
    })
  );
  const response = await fetch(
    `https://parseapi.back4app.com/classes/City?limit=10&order=name&keys=name,country&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": "mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja", // This is the fake app's application id
        "X-Parse-Master-Key": "TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH", // This is the fake app's readonly master key
      },
    }
  );
  
  const data = await response.json(); // Here you have the data that you need
  console.log(JSON.stringify(data, null, 2));
 // console.log(data.results);
  return(
    <>
    <ul>
      <li>Hello</li>
    </ul>
    </>
  )
  
};

export default function DropDownListComponent(input) {
  return(<div>Hello</div>)
}*/
import { Stack } from "react-bootstrap";

export default function DropDownListComponent(props) {
  const { list, input} = props;
  //console.log("List is: " + list);
  console.log(input);
  if (list == null || list == "" || list == []) {
    return <></>;
  }
  const listItems = list.map((city, index) => <div key={index} className="p-2">
    <strong>{city.substring(0, input.length)}</strong>
    {city.substring(input.length)}
    </div>);
  return <div className="border border-2 mt-0 rounded-top">{listItems}</div>
}
