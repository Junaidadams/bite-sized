import { useEffect, useState } from "react";

const CheckoutForm = ({ checkoutMenuOpen, handleClose, cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [saveInfo, setSaveInfo] = useState(false); // checkbox state

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

  const handleSubmit = (e) => {
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

    // TODO: send `orderDetails` to your mail server or API

    alert("Order submitted!");
    handleClose();
  };

  if (!checkoutMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10"
      onClick={handleClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-xl bg-mainWhite inline-block w-[90vw] sm:w-[70vw] max-h-[80vh] overflow-y-auto p-4 sm:p-6 space-y-6"
        >
          <h2 className="text-xl font-bold text-paynesGrey">
            Confirm Your Order
          </h2>

          <div>
            <label className="block text-paynesGrey font-medium mb-1">
              Your Name
            </label>
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
            <label className="block text-paynesGrey font-medium mb-1">
              Your Number
            </label>
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
            <label className="block text-paynesGrey font-medium mb-1">
              Email Address
            </label>
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
            <label htmlFor="saveInfo" className="text-sm text-paynesGrey">
              Save my info for next time
            </label>
          </div>

          <div>
            <label className="block text-paynesGrey font-medium mb-1">
              Your Items:
            </label>
            <ul className="text-sm text-gray-700 list-disc pl-4">
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.quantity} x {item.name} ({item.flavour || "No flavour"})
                </li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="bg-mainOrange text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
