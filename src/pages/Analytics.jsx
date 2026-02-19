import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
    const { state, dispatch } = useContext(AppContext);

    const totalPrice = useMemo(() => {
        console.log("Calculating total...");
        return state.cart.reduce((total, item) => total + item.price, 0);
    }, [state.cart]);

    return (
        <div className="container">
        <h2>Cart Analytics</h2>
        <p>Total Items: {state.cart.length}</p>
        <p>Total Price: ₹{totalPrice}</p>

        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
        </button>

        {state.cart.map(item => (
            <div key={item.id}>
            {item.name} - ₹{item.price}
            <button
            onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
            >
            Remove
            </button>
            </div>
        ))}
        </div>
    );
}

export default Analytics;
