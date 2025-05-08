import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ListingTile = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(data.quantities[0]);
  const [selectedFlavour, setSelectedFlavour] = useState(
    data.flavours ? data.flavours[0] : null
  );

  const handleAddToCart = () => {
    const cartItem = {
      key: data.key,
      name: data.name,
      price: data.pricing,
      quantity: selectedQuantity,
      flavour: selectedFlavour,
    };
    addToCart(cartItem);
    alert(`${data.name} added to cart`);
  };

  return (
    <div className="w-full rounded-xl shadow-2xl m-auto">
      <div className="relative">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <h3 className="font-bold text-lg">{data.name}</h3>
        <p className="text-gray-700">Price: R{data.pricing}</p>

        <div className="my-2">
          <label className="block text-sm">Quantity:</label>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            className="w-full p-1 rounded"
          >
            {data.quantities.map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </div>

        {data.flavours && (
          <div className="my-2">
            <label className="block text-sm">Flavour:</label>
            <select
              value={selectedFlavour}
              onChange={(e) => setSelectedFlavour(e.target.value)}
              className="w-full p-1 rounded"
            >
              {data.flavours.map((flavour) => (
                <option key={flavour} value={flavour}>
                  {flavour}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="bg-mainOrange text-white px-3 py-1 rounded mt-2 hover:bg-opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ListingTile.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pricing: PropTypes.number.isRequired,
    quantities: PropTypes.array.isRequired,
    flavours: PropTypes.array,
    leadTimeDays: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListingTile;
