import { useParams } from "react-router";
import Cart from "./Cart";
import ShopPage from "./ShopPage";
import Default from "./Default";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import NavBar from "./NavBar";

const Parent= () =>{
    const { name } = useParams();
    const [cartItems, setCartItems]= useState([]);
    const [itemsQuantity, setItemsQuantity]= useState([]);
    const [countItems, setCountItems]= useState(0);

    return (
        <div>
            
            <Outlet context={[cartItems,setCartItems, countItems, setCountItems, itemsQuantity, setItemsQuantity]}/>
        </div>
    );
};

export default Parent;