import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux/slices/cartSlice";
import { useMemo } from "react";

function Reports() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = useMemo(() => items.length, [items]);

  return (
    <div className="container">
      <h2>Reports Page</h2>

      <button
        onClick={() =>
          dispatch(addItem({ id: Date.now(), name: "Item" }))
        }
      >
        Add Item
      </button>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <h3>Total Items: {totalItems}</h3>

      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Reports;