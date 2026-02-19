import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function CardComponent({ item }) {
    const { dispatch } = useContext(AppContext);

    return (
        <div className="card">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
        Add to Cart
        </button>
        </div>
    );
}

export default CardComponent;
