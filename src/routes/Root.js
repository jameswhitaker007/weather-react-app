import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

function RootLayout() {
    const navigation = useNavigation();

    //navigation.state === ''

    return (
        <>
            <Header />
            <Container>
                {navigation.state === 'loading' && <div id="overlay">
                    <Spinner animation="border" variant="info" className="spinner" />
                </div>}
                <Outlet />
            </Container>
        </>
    )
}

export default RootLayout;