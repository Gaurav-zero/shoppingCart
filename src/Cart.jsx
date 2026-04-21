import { useState } from "react";
import NavBar from "./NavBar";
import { useOutletContext } from "react-router";

const Cart= () => {
    const [cartItems, setCartItems, countItems, setCountItems, itemsQuantity, setItemsQuantity]= useOutletContext();

    const handleChange= (e,ind) => {
        let newQuantity= [...itemsQuantity];
        newQuantity[ind]= e.target.value;

        let oldQ= itemsQuantity[ind];
        let newQ= e.target.value;

        setItemsQuantity(newQuantity);
        setCountItems(countItems+Number(newQ)-Number(oldQ));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            
            <NavBar />

            <ul>
                {cartItems.map((item, ind)=> {
                    return  <li>
                                {ind+1}.{item}
                                <input type="number" value={itemsQuantity[ind]} onChange={(e)=> handleChange(e,ind)}/>
                            </li>
                })}
            </ul>
            
        </div>
    );
};

export default Cart;