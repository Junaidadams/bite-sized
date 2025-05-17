import HeaderDiv from "../components/HeaderDiv";
const About = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-[url(/texture1.png)] bg-repeat [background-size:30%] sm:[background-size:25%] md:[background-size:20%] lg:[background-size:15%] xl:[background-size:10%]">
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className="border border-mainGreen rounded-xl mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-3 sm:p-4 md:p-5 lg:p-7 xl:p-8 shadow-xl">
          <div className="bg-white border border-mainBlack shadow-lg w-full rounded-xl">
            <HeaderDiv text="About" imgUrl="/kitchen.jpg" />
            <div className="p-2 sm:p-4 md:p-5">
              <p className="font-semibold">
                If you’re out of ideas for the kids' lunchbox, you’ll love our
                bite-sized Lunchables. Choose from our range of pizzas,
                corndogs, or both. They come pre-cooked and frozen—simply pop
                them in the air fryer for 2-5 minutes or until crispy. Cooking
                time may vary depending on your air fryer’s wattage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
