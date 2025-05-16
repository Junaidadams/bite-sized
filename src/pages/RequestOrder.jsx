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
    <div className="min-h-screen -mt-[56px] flex flex-col bg-[url(/texture1.png)] bg-repeat [background-size:30%] sm:[background-size:25%] md:[background-size:20%] lg:[background-size:15%] xl:[background-size:10%]">
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className="border border-mainGreen rounded-xl mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-white p-3 sm:p-4 md:p-5 lg:p-7 xl:p-8 shadow-xl">
          <div className="bg-white border border-mainBlack shadow-lg rounded-xl">
            <HeaderDiv text="Cart" imgUrl="/order.jpg" />

            <div className="p-2 sm:p-4 md:p-5">
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
                Placing an order will notify us and we will confirm the order
                and reach out to you to organize payment and delivery.
              </p>
              <div className="flex space-x-2">
           <button
             className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2"
           >
             <span>Add to Cart</span>
             <BsCartPlus className="my-auto" />
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
    </div>
  );
};

export default RequestOrder;
