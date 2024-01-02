import Header from "../components/header";
import SearchBarComponent from "../components/searchBarComponent";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard() {
 const weatherState =  useSelector(state => state);
return(
    <>
    <h1>Dashboard</h1>
    
    </>
)
}