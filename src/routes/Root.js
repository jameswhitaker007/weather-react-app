import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";

function RootLayout() {
const navigation = useNavigation();

//navigation.state === ''

    return (
        <>
            <Header />
            {navigation.state === 'loading' && <p>Loading ...</p>}
            <Outlet />
        </>
    )
}

export default RootLayout;