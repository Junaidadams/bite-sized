const HeaderDiv = ({ imgUrl, text }) => {
  return (
    <div className="relative h-40">
      <img
        src={imgUrl}
        alt={text + " image"}
        className="w-full h-full object-cover rounded-t-xl"
      />
      <p className="absolute bottom-2 left-2 font-bold bg-opacity-60 text-white text-5xl tracking-wider px-2 py-1 rounded ">
        {text}
      </p>{" "}
    </div>
  );
};

export default HeaderDiv;
