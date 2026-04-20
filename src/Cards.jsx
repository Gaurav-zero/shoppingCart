import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const Cards= ({ind}) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [price, setPrice]= useState("");
    const [imgUrl, setImgUrl]= useState("");

    const [cartItems, setCartItems]= useOutletContext();

    const handleAddToCart= (e) =>{
        let newItems= [...cartItems, e.target.value];
        setCartItems(newItems);
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

            <button value={title} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Cards;