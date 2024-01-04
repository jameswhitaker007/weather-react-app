import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";
import { Container } from "react-bootstrap";

function RootLayout() {
const navigation = useNavigation();

//navigation.state === ''

    return (
        <>
            <Header />
            {navigation.state === 'loading' && <p>Loading ...</p>}
            <Container>
            <Outlet />
            </Container>
        </>
    )
}

export default RootLayout;