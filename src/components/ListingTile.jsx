import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { BsCartPlus } from "react-icons/bs";

const ListingTile = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(data.quantities[0]);
  const [selectedFlavour, setSelectedFlavour] = useState(
    data.flavours ? data.flavours[0].name : null
  );

  const handleAddToCart = () => {
    const cartItem = {
      key: data.key,
      img: data.img,
      name: data.name,
      price: data.pricing,
      quantity: selectedQuantity,
      flavour: selectedFlavour,
    };
    addToCart(cartItem);
  };

  // Get the ingredients for the selected flavour (if available)
  const selectedFlavourIngredients = data.flavours?.find(
    (flavour) => flavour.name === selectedFlavour
  )?.ingredients;

  return (
    <div className="w-full flex flex-col rounded-t-xl rounded-b-xl bg-white shadow-lg m-auto border-mainBlack border">
      <div className="relative h-40">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
        <div>
          <h3 className="font-bold tracking-wide text-xl">{data.name}</h3>
          <p className="text-gray-700">Price: R{data.pricing}</p>

          <div className="my-2">
            <label className="block text-sm">Quantity:</label>
            <select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              className="w-full p-1 rounded border border-gray-300"
            >
              {data.quantities.map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>

          {data.flavours ? (
            <div className="my-2">
              <label className="block text-sm">Flavour:</label>
              <select
                value={selectedFlavour}
                onChange={(e) => setSelectedFlavour(e.target.value)}
                className="w-full p-1 rounded border border-gray-300"
              >
                {data.flavours.map((flavour) => (
                  <option key={flavour.name} value={flavour.name}>
                    {flavour.name}
                  </option>
                ))}
              </select>

              {selectedFlavourIngredients && (
                <div className="mt-2 text-sm text-gray-600">
                  <h4 className="font-semibold">Ingredients:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {selectedFlavourIngredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="my-2">
              <label className="block text-sm">Flavour:</label>
              <select
                disabled={true}
                value=""
                className="w-full p-1 rounded border border-gray-300"
              >
                <option value="not available">N/A </option>
              </select>
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2"
        >
          <span>Add to Cart</span>
          <BsCartPlus className="my-auto" />
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
    flavours: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    leadTimeDays: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListingTile;
