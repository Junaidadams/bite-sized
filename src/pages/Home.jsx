const Home = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex bg-mainWhite">
      <div className="relative w-full h-screen">
        {" "}
        {/* relative for positioning text */}
        <img
          src="/pizza3.jpg"
          className="w-full h-full object-cover filter: brightness-75"
          alt="Delicious pizza"
        />
        <div className="absolute inset-6 flex items-center justify-center">
          <h1 className="text-white text-4xl font-serif font-black drop-shadow-lg backdrop-blur-sm p-2">
            Bite sized lunchbox solutions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
