import NavBar from "./NavBar";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const ShopPage = () => {    
    const [cards, setCards]= useState([0,1,2,3,4,5]);

    return (
        <div>
            <h1>Get best Merchandises</h1>
            <NavBar />

            {cards.map((ind) => (
                <Cards ind={ind} />
            ))}           


        </div>
    );
};

export default ShopPage;