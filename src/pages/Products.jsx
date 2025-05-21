import { useContext } from "react";
import { snackItems } from "../../constants";
import ListingTile from "../components/ListingTile";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import Layout from "../components/Layout";

const Products = () => {
  const { cart, removeFromCart } = useContext(CartContext);
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
    <Layout size={1}>
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
                  {item.quantity}) - {item.flavour ? `${item.flavour}, ` : ""}
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
          className="bg-mainBlack w-fit text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2"
        >
          <span>Checkout</span>
          <IoBagCheckOutline className="my-auto" />
        </Link>
      </div>
    </Layout>
  );
};

export default Products;
