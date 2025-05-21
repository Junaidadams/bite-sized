import HeaderDiv from "../components/HeaderDiv";
import Layout from "../components/Layout";

import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <Layout size={2}>
      <form className="bg-white border border-mainBlack shadow-lg w-full rounded-xl">
        <HeaderDiv imgUrl="/contact.jpg" text="Contact" />
        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <label className="block text-paynesGrey font-medium  mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-sm"
            />
          </div>
          <div>
            <label className="block text-paynesGrey font-medium  mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-sm"
            />
          </div>
          <div>
            <label className="block text-paynesGrey font-medium  mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded-sm"
            />
          </div>
          <button className="bg-mainBlack text-white px-3 py-2 rounded mt-4 hover:bg-opacity-90 flex items-center justify-center gap-2">
            <span>Send</span>
            <IoIosSend className="my-auto" />
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
