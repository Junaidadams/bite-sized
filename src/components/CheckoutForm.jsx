import { useEffect, useState } from "react";
import HeaderDiv from "./HeaderDiv";
import axios from "axios";

const CheckoutForm = ({ checkoutMenuOpen, handleClose, cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [saveInfo, setSaveInfo] = useState(false); // checkbox state
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("checkoutInfo");
    if (saved) {
      setFormData(JSON.parse(saved));
      setSaveInfo(true); // pre-check the box if saved data exists
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saveInfo) {
      localStorage.setItem("checkoutInfo", JSON.stringify(formData));
    } else {
      localStorage.removeItem("checkoutInfo");
    }
    const orderDetails = {
      ...formData,
      cartItems,
    };
    try {
      const response = await axios.post("mail-server", orderDetails);
      setStatus({ success: true, message: "Order submitted!" });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
      console.log(error);
    }
    alert("Order submitted!");
    handleClose();
  };

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  if (!checkoutMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 shadow-lg"
      onClick={handleClose}
    >
      <div className="relative w-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl border border-mainGreen sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 sm:p-4 md:p-5 lg:p-7 xl:p-8 mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="relative rounded-xl border border-mainBlack bg-white w-full inline-block  overflow-y-auto shadow-xl"
          >
            <HeaderDiv text="Place Order" imgUrl="/pizza.jpg" />
            <div className="p-4 sm:p-6 space-y-2">
              <p className="text-sm sm:text-base">
                We will need some of your contact information before the order
                can be placed, so that we can reach out to you.
              </p>
              <div>
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Your Number</label>
                <input
                  type="text"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={() => setSaveInfo((prev) => !prev)}
                  className=" w-4 h-4"
                />
                <label htmlFor="saveInfo" className="text-sm">
                  Save my info for next time
                </label>
              </div>
              <div>
                <label className="block font-medium mb-1">Your Items:</label>
                <ul className="text-sm text-gray-700 list-disc pl-4">
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.quantity} x {item.name} (
                      {item.flavour || "No flavour"}) R{item.price}
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-lg mt-3">
                  Total: R{cartTotal.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2"
                >
                  Submit Order
                </button>
                <button className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2">
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
