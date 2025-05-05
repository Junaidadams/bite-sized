import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full shadow-lg bg-mainBlack"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 text-mainWhite" color="" />
      ) : (
        <LuAlignLeft className="h-6 w-6 text-mainWhite" color="" />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
