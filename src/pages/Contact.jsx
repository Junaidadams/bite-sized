import HeaderDiv from "../components/HeaderDiv";

const Contact = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-[url(/texture1.png)] bg-repeat [background-size:30%] sm:[background-size:25%] md:[background-size:20%] lg:[background-size:15%] xl:[background-size:10%]">
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className="border border-mainGreen rounded-xl mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 xl:w-2/3 bg-white p-3 sm:p-4 md:p-5 lg:p-7 xl:p-8 shadow-xl">
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
