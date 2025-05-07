const Home = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex bg-mainWhite">
      <div className="relative w-full h-screen">
        {" "}
        {/* relative for positioning text */}
        <img
          src="/pizza2.jpg"
          className="w-full h-full object-cover filter: brightness-75"
          alt="Delicious pizza"
        />
        <div className="absolute inset-6 flex items-center justify-center">
          <h1 className="text-white text-4xl font-serif font-black drop-shadow-lg">
            Bite sized lunchbox solutions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
