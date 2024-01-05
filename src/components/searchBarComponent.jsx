import { Form } from "react-bootstrap";
import DropDownListComponent from "./dropDownListComponent";
import { useEffect, useState, useRef } from "react";
import { current } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { InputGroup } from "react-bootstrap";

export default function SearchBarComponent() {
  const [input, setInput] = useState("Toronto");
  const [list, setList] = useState("");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const string = e.target.className.toString();
      const position = string.search(/search-element/i);
      const regex = new RegExp();
      if (position === -1) {
        setList([]);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const id = e.target.id.toString();
      console.log(id);
      if (id === "searchBar") {
        getList(e);
      }
    });
  }, []);

  const closeList = () => {
    setList([]);
  };

  const getList = async (e) => {
    const targetInput = e.target.value;
    if (targetInput == "" || targetInput == null) {
      setList([]);
      return;
    }
    const trimmedInput = targetInput.trim();
    const words = trimmedInput.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const conditionedInput = words.join(" ");
    console.log(input);
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: "^" + conditionedInput,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/City?limit=20&include=country&keys=name,country,country.name,population,location,cityId,adminCode&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja", // This is the fake app's application id
          "X-Parse-Master-Key": "TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH", // This is the fake app's readonly master key
        },
      }
    );

    const data = await response.json();
    const { results } = data;
    console.log(results);
    const resultList = [];
    const regex = RegExp(`^${input}`, "i");
    for (let i = 0; i < results.length; i++) {
      resultList.push({
        name: results[i].name,
        id: results[i].cityId,
        country: results[i].country.name,
        lat: results[i].location.latitude,
        lon: results[i].location.longitude,
      });
    }
    //console.log(resultList);
    setInput(e.target.value);
    setList(resultList);
  };

  useEffect(function () {}, [input]);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <div
            style={{ position: "relative", padding: "0px", margin: "0px" }}
            className="search-element"
          >
            <Form.Control
              type="text"
              id="searchBar"
              onChange={getList}
              className="me-0 search-element"
              placeholder="Enter city"
            />

            <DropDownListComponent
              list={list}
              input={input}
              className="search-element"
            />
          </div>
        </Row>
      </Container>
    </>
  );
}
