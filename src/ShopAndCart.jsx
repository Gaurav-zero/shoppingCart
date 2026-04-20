import { useParams } from "react-router";
import Cart from "./Cart";
import ShopPage from "./ShopPage";
import Default from "./Default";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";

const Parent= () =>{
    const { name } = useParams();
    const [cartItems, setCartItems]= useState(["pants"]);

    return (
        <div>
            <Outlet context={[cartItems,setCartItems]}/>
        </div>
    );
};

export default Parent;