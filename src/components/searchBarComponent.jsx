import { Form } from "react-bootstrap";
import DropDownListComponent from "./dropDownListComponent";
import { useEffect, useState, useRef } from "react";
import { current } from "@reduxjs/toolkit";

export default function SearchBarComponent() {
  const [input, setInput] = useState("Toronto");
  const [list, setList] = useState("");
  
  const changeInput = (e) => {
    setInput(e.target.value);
    if(input == "" || input == null) return;
    //console.log(document.getElementById('searchBar').value);
    getList();
    //console.log(input);
  };

  

  const getList = async (e) => {
    
    const input = e.target.value;
    console.log(input);
    if(input == "" || input == null) return;
    const conditionedInput = input[0].toUpperCase() + input.slice(1);
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: '^' + conditionedInput,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/City?limit=20&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja", // This is the fake app's application id
          "X-Parse-Master-Key": "TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH", // This is the fake app's readonly master key
        },
      }
    );

    const data = await response.json();
    const { results } = data;
    //console.log(results);
    const resultList = [];
    const regex = RegExp(`^${input}`, "i");
    for (let i = 0; i < results.length; i++) {
        resultList.push(results[i].name);
      
    }
    //console.log(resultList);
    const uniqueResultsList = [...new Set(resultList)];
    console.log(uniqueResultsList);
    setList(uniqueResultsList);
  };

  useEffect(function () {}, [input]);

  return (
    <>
      <Form.Control type="text" id="searchBar" onChange={getList} />
      <DropDownListComponent list={list}/>
    </>
  );
}
