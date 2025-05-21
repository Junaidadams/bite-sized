import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { CiTrash } from "react-icons/ci";
import HeaderDiv from "../components/HeaderDiv";
import { BsCartCheckFill } from "react-icons/bs";
import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";

const RequestOrder = () => {
  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false);
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const handleClose = () => {
    setCheckoutMenuOpen(false);
  };

  const handleRemoveFromCart = (item) => {
    const cartItem = {
      key: item.key,
      img: item.img,
      name: item.name,
      price: item.pricing,
    };
    removeFromCart(cartItem);
  };

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <Layout size={2}>
      <div className="bg-white border border-mainBlack shadow-lg rounded-xl">
        <HeaderDiv text="Cart" imgUrl="/order.jpg" />
        <div className="p-2 sm:p-4 md:p-5">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item, index) => (
                <li key={index} className="flex hover:bg-slate-200 p-1 ">
                  <img
                    alt={item.name}
                    src={item.img}
                    className="w-7 h-7 sm:w-9 sm:h-9 md:h-10 md:w-10 rounded object-cover my-auto mr-2 md:mr-4"
                  />
                  <div className="my-auto text-sm sm:text-base flex flex-col">
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
          <p className="text-sm sm:text-base my-4">
            Placing an order will notify us and we will confirm the order and
            reach out to you to organize payment and delivery.
          </p>
          <p className="font-semibold text-lg">
            Total: R{cartTotal.toFixed(2)}
          </p>

          <div className="flex space-x-2">
            <button
              disabled={cart.length === 0}
              onClick={() => setCheckoutMenuOpen(true)}
              className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2"
            >
              <span>Place Order</span>
              <BsCartCheckFill className="my-auto" />
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

      {checkoutMenuOpen && (
        <CheckoutForm
          checkoutMenuOpen={checkoutMenuOpen}
          handleClose={handleClose}
          cartItems={cart}
        />
      )}
    </Layout>
  );
};

export default RequestOrder;
