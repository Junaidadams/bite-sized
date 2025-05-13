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
          <HeaderDiv text="Cart" imgUrl="/order.jpg" />
          <div className="bg-white p-2 sm:p-4 md:p-5 shadow-lg rounded-b-xl">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="space-y-3">
                {cart.map((item, index) => (
                  <li key={index} className="flex hover:bg-slate-200 p-1">
                    <img
                      alt={item.name}
                      src={item.img}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:h-10 md:w-10 rounded object-cover my-auto mr-2 md:mr-4"
                    />
                    <div className="my-auto text-sm md:text-base flex flex-col">
                      <span>
                        <span className="font-semibold">{item.name}</span> (
                        {item.quantity}) -{" "}
                        {item.flavour ? `${item.flavour}, ` : ""}
                      </span>
                      <span>R{item.price}</span>
                    </div>
                    <button
                      type="button"
                      className="ml-auto w-fit"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <CiTrash className="w-5 h-5 md:h-6 md:w-6" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-sm my-4">
              Placing an order will notify us and we will confirm the order and
              reach out to you to organize payment and delivery.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={clearCart}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Place Order
              </button>
              <button
                onClick={clearCart}
                className="mt-2  text-mainBlack px-2 py-1 border-b-white hover:border-b-black hover:border-b"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestOrder;
