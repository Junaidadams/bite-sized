import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const RequestOrder = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div className="min-h-screen -mt-[56px] flex bg-mainWhite">
      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.flavour ? `${item.flavour}, ` : ""}
                {item.quantity} for R{item.price}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={clearCart}
          className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default RequestOrder;
