import { useContext } from "react";
import { snackItems } from "../../constants";
import ListingTile from "../components/ListingTile";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";

const Products = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
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
      <div className="mx-auto my-10 min-h-screen w-[95%]">
        <div className="border border-mainGreen rounded-xl mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-white p-3 sm:p-4 md:p-5 lg:p-7 xl:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
            {snackItems.map((data) => (
              <ListingTile key={data.key} data={data} />
            ))}
          </div>
          <div className="bg-white text-mainBlack border-mainBlack border rounded-xl shadow-lg p-4 mt-8 ">
            <h1 className=" font-bold text-xl border-b border-black pb-1">
              Cart Summary
            </h1>
            <ul className="text my-3 space-y-3">
              {cart.map((item, index) => (
                <li key={index} className="flex hover:bg-slate-200 p-1">
                  <img
                    alt={item.name}
                    src={item.img}
                    className="w-8 h-8 rounded-sm object-cover my-auto mr-2"
                  />
                  <div className="my-auto text-sm flex flex-col">
                    <span>
                      <span className="font-semibold">{item.name}</span> (
                      {item.quantity}) -{" "}
                      {item.flavour ? `${item.flavour}, ` : ""}
                    </span>
                    <span>R{item.price}</span>
                  </div>
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

            <Link
              to="/request-order"
              className="bg-mainWhite text-mainBlack py-[3px] px-2 font rounded-sm"
            >
              Go to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
