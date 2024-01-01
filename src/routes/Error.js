import Header from "../components/header";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
const error = useRouteError();
console.log(error);
let title = 'An error occurred!';
let message = 'Something went wrong!';

if (error.status === 500) {
    //const messageJSON = JSON.parse(error.data);
    message = error.data.message;
}

if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
}

return(
    <>
        <Header />
        <main>
            <h1>{title}</h1>
            <p>{message}</p>
        </main>
    </>
)
}

export default ErrorPage;