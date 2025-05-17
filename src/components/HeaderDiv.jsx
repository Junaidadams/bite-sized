import PropTypes from "prop-types";
import { useState } from "react";

const HeaderDiv = ({ imgUrl, text }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-40 overflow-hidden rounded-t-xl">
      <img
        src={imgUrl}
        alt={text + " image"}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
      <p className="absolute bottom-2 left-2 font-bold bg-opacity-60 text-white text-5xl tracking-wider px-2 py-1 rounded ">
        {text}
      </p>
    </div>
  );
};

HeaderDiv.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderDiv;
