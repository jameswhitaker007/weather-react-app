import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
//import NavbarComponent from './ui/navbar';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';
import Button from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
//import {add} from './store'

function App() {
  const resultArray = [];
  const input = "Tor";
  //console.log(regexp.test('toron'));
  

  function sortData(data) {
    //console.log(data.results);
    data.results.forEach(element => {
      //console.log(element.name);
      const regex = RegExp('^Tor', 'i');
      //console.log(regex.test(element.name));
      if (regex.test(element.name)) {
        resultArray.push(element);
      }
    });
    console.log(resultArray);
  }

  return (
    <>

    </>
  );
}

export default App;
