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

  /*
  const changeInput = (e) => {
    setInput(e.target.value);
    if (input == "" || input == null) {
      setList((list) => null);
      return;
    }
    //console.log(document.getElementById('searchBar').value);
    getList();
    //console.log(input);
  };*/

  const getList = async (e) => {
    const targetInput = e.target.value;
    //setInput(e.target.value);
    if (targetInput == "" || targetInput == null) {
      setList([]);
      return;
    }
    const trimmedInput = targetInput.trim();
    const words = trimmedInput.split(" ");
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const conditionedInput = words.join(" ");
    console.log(input);
    //const conditionedInput = input[0].toUpperCase() + input.slice(1);
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: "^" + conditionedInput,
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
    console.log(results);
    const resultList = [];
    const regex = RegExp(`^${input}`, "i");
    for (let i = 0; i < results.length; i++) {
      resultList.push({name: results[i].name, lat: results[i].location.latitude, lon: results[i].location.longitude});
    }
    //console.log(resultList);
    //const uniqueResultsList = [...new Set(resultList)];
    //console.log(uniqueResultsList);
    setInput(e.target.value);
    setList(resultList);
  };

  useEffect(function () {}, [input]);

  return (
    <>
      <Container>
        <Row>
          <Form className="mt-3 p-0">
            <InputGroup>
              <Form.Control
                type="text"
                id="searchBar"
                onChange={getList}
                className="me-0"
              />

              <Button type="submit">Submit</Button>
            </InputGroup>
          </Form>
          <DropDownListComponent list={list} input={input} />
        </Row>
      </Container>
    </>
  );
}
