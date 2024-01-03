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
import Header from './components/header';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import City, { loader as cityLoader } from "./routes/city";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import CityRootLayout from './routes/cityRoot';
import CityDetails from './routes/cityDetails';
import { loader as cityDetailsLoader } from './components/listItemComponent';




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'city', element: <CityRootLayout />,
        children: [
          {
            index: true,
            element: <City />
          },
          { path: ':lat/:lon', element: <CityDetails />, loader: cityDetailsLoader }
        ]
      },

    ]
  }

])

/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/city',
    element: <City />
  },
  {
    path: '/city/:lat/:lon',
    element: <City />,
    
  }
  
])*/

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
