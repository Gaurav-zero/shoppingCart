import HomePage from "./home";
import Cart from "./Cart";
import ShopPage from "./ShopPage";
import Parent from "./ShopAndCart";

const routes= [
    {
        path: "/",
        element: <Parent />,
        children:[
            { path: "/", element: <HomePage />},
            { path: "shop", element: <ShopPage /> },
            { path: "cart", element: <Cart />},
        ],
    },
];

export default routes;