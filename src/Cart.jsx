import { useState } from "react";
import NavBar from "./NavBar";
import { useOutletContext } from "react-router";

const Cart= () => {
    const [cartItems, setCartItems]= useOutletContext();

    return (
        <div>
            <h1>Shopping Cart</h1>
            
            <NavBar />

            <ul>
                {cartItems.map((item, ind)=> {
                    return <li>{ind+1}.{item}</li>
                })}
            </ul>
            
        </div>
    );
};

export default Cart;