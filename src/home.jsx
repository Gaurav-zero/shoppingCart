import NavBar from "./NavBar";
import { useOutletContext } from "react-router";

const HomePage= () => {
    //const [cartItems, setCartItems, countItems, setCountItems]= useOutletContext();

    return (
        <div>
            <h1>Welcome to Gonker's Corner</h1>
            <p>Let's start shopping without delay</p>

            <NavBar />
        </div>
    );
};

export default HomePage;