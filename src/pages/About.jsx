import Layout from "../components/Layout";
import HeaderDiv from "../components/HeaderDiv";
const About = () => {
  return (
    <Layout size={2}>
      <div className="bg-white border border-mainBlack shadow-lg w-full rounded-xl">
        <HeaderDiv text="About" imgUrl="/kitchen.jpg" />
        <div className="p-4 sm:p-6 md:p-5 space-y-6 text-mainBlack">
          <div>
            <h1 className="text-xl font-black">Our idea</h1>
            <p className="text-lg">
              If you’re out of ideas for the kids' lunchbox, you’ll love our
              bite-sized Lunchables. Choose from our range of pizzas, corndogs,
              or both. They come pre-cooked and frozen—simply pop them in the
              air fryer for 2-5 minutes or until crispy. Cooking time may vary
              depending on your air fryer’s wattage.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-black">Like our food?</h1>
            <p className="text-lg">
              If you like our food, share our information with somebody close to
              you that might benefit from the convenience of bite-sized snacks.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
