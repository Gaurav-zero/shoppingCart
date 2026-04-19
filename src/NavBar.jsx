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
                        <Link to="/cart">Cart</Link>
                    </li>

                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;