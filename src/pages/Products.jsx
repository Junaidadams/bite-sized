import { useContext } from "react";
import { snackItems } from "../../constants";
import ListingTile from "../components/ListingTile";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-mainBlue">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className=" mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-mainWhite p-3 sm:p-4 md:p-5 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
            {snackItems.map((data) => (
              <ListingTile key={data.key} data={data} />
            ))}
          </div>
          <div className="bg-mainBlack text-white rounded-sm p-4 mt-8 ">
            <h1 className=" font-bold text-xl border-b pb-1">Cart Summary</h1>
            <ul className="text my-3">
              {cart.map((item, index) => (
                <li key={index}>
                  {item.quantity} {item.name} -{" "}
                  {item.flavour ? `${item.flavour}, ` : ""}R{item.price}
                </li>
              ))}
            </ul>
            {/* <p>Total - </p> */}
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
