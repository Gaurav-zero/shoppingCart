import HomePage from "./home";
import Cart from "./Cart";
import ShopPage from "./ShopPage";

const routes= [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path:"shop",
        element: <ShopPage />
    },
];

export default routes;