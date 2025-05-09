import { useContext } from "react";
import { snackItems } from "../../constants";
import ListingTile from "../components/ListingTile";

import { CartContext } from "../context/CartContext";

const Products = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-mainWhite">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className=" mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 xl:gap-6">
            {snackItems.map((data) => (
              <ListingTile key={data.key} data={data} />
            ))}
          </div>
          <div>
            <h1>Cart Summary</h1>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.quantity} {item.name} -{" "}
                  {item.flavour ? `${item.flavour}, ` : ""}R{item.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
