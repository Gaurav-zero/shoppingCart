import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const Cards= ({ind}) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [price, setPrice]= useState("");
    const [imgUrl, setImgUrl]= useState("");

    const[quantity, setQuantity]= useState(0);

    const [cartItems, setCartItems, countItems, setCountItems, itemsQuantity, setItemsQuantity]= useOutletContext();

    const handleAddToCart= (e) =>{
        let newItems= [...cartItems, e.target.value];
        let newQuantity= [...itemsQuantity, quantity];
        setCartItems(newItems);
        setItemsQuantity(newQuantity);
        setCountItems(countItems+Number(quantity));
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setDesc(data[ind].description);
                setTitle(data[ind].title);
                setPrice(data[ind].price);
                setImgUrl(data[ind].image);
            });
    }, []);
    
    return (
        <div>
            <img src={imgUrl} alt="no image yet" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <h2>${price}</h2>
            
            <input type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
            <button value={title} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Cards;