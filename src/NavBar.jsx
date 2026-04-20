import { Link } from "react-router";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>

                    <li>
                        <Link to="/shopAndCart/cart">Cart</Link>
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