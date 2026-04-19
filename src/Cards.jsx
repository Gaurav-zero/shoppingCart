const Cards= ({title, price, image, desc, handleaddToCart}) => {
    return (
        <div>
            <img src={image} alt="no image yet" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <h2>Rs.{price}</h2>

            <button onClick={handleaddToCart}>Add to Cart</button>
        </div>
    );
};

export default Cards;