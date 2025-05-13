import HeaderDiv from "../components/HeaderDiv";

const Contact = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-mainBlue">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className=" mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-mainWhite p-3 sm:p-4 md:p-5 shadow-xl">
          <form className="bg-white shadow-lg w-full space-y-6 rounded-xl">
            <HeaderDiv imgUrl="/pizza.jpg" text="Contact" />
            <div className="p-4 sm:p-6">
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
              <button
                type="submit"
                className="bg-mainOrange text-white px-3 py-2 rounded mt-2 hover:bg-opacity-90 flex"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
