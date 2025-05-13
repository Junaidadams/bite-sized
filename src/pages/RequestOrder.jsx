import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CiTrash } from "react-icons/ci";
import HeaderDiv from "../components/HeaderDiv";

const RequestOrder = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (item) => {
    const cartItem = {
      key: item.key,
      img: item.img,
      name: item.name,
      price: item.pricing,
    };
    removeFromCart(cartItem);
  };

  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-mainBlue">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className=" mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-mainWhite p-3 sm:p-4 md:p-5 shadow-xl">
          <HeaderDiv text="Cart" imgUrl="/pizza.jpg" />
          <div className="bg-white p-4 shadow-lg rounded-b-xl">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="space-y-1">
                {cart.map((item, index) => (
                  <li key={index} className="flex">
                    <img
                      alt={item.name}
                      src={item.img}
                      className="w-8 h-8 rounded-sm object-cover my-auto mr-2"
                    />
                    <span className="my-auto">
                      {item.name} - {item.flavour ? `${item.flavour}, ` : ""}
                      {item.quantity} for R{item.price}
                    </span>
                    <button
                      type="button"
                      className="ml-auto"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <CiTrash size={22} />
                    </button>
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
      </div>
    </div>
  );
};

export default RequestOrder;
