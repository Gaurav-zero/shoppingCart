import { Link } from "react-router";
import { useOutletContext } from "react-router";

const NavBar = () => {
    const [cartItems, setCartItems, countItems, setCountItems]= useOutletContext();

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>

                    <li>
                        <Link to="/shopAndCart/cart">Cart({countItems})</Link>
                    </li>

                    <li>
                        <Link to="/shopAndCart/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;