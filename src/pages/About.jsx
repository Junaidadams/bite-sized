import Layout from "../components/Layout";
import HeaderDiv from "../components/HeaderDiv";
const About = () => {
  return (
    <Layout size={2}>
      <div className="bg-white border border-mainBlack shadow-lg w-full rounded-xl">
        <HeaderDiv text="About" imgUrl="/kitchen.jpg" />
        <div className="p-2 sm:p-4 md:p-5">
          <p className="font-semibold">
            If you’re out of ideas for the kids' lunchbox, you’ll love our
            bite-sized Lunchables. Choose from our range of pizzas, corndogs, or
            both. They come pre-cooked and frozen—simply pop them in the air
            fryer for 2-5 minutes or until crispy. Cooking time may vary
            depending on your air fryer’s wattage.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
