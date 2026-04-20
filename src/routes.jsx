import HomePage from "./home";
import Cart from "./Cart";
import ShopPage from "./ShopPage";
import Parent from "./ShopAndCart";

const routes= [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "shopAndCart",
        element: <Parent />,
        children:[
            { path: "shop", element: <ShopPage /> },
            { path: "cart", element: <Cart />},
        ],
    },
];

export default routes;