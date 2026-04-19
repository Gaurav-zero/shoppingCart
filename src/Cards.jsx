import { useEffect, useState } from "react";

const Cards= ({ind, handleAddToCart}) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [price, setPrice]= useState("");
    const [imgUrl, setImgUrl]= useState("");

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

            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Cards;