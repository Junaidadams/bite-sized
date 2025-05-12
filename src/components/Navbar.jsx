// Navbar.jsx
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../constants";
import Toggle from "./Toggle";
import { CiShoppingCart } from "react-icons/ci";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  return (
    <div className="z-20 flex justify-between items-center min-w-screen sticky top-0 min-h-[56px]">
      {/* Navigation Links */}
      <div className="md:hidden ml-2">
        <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <ul className="space-x-8 capitalize px-8 rounded-bl md:flex hidden flex-row ml-auto mb-auto text-mainWhite backdrop-blur bg-mainBlack bg-opacity-90 pb-3 pt-3">
        {navigationLinks.map((link) => (
          <li key={link.key} className="">
            <a
              href={link.link}
              className="text-space-cadet py-2 px-1 rounded-full hover:text-gray-300"
            >
              {link.name}
            </a>
          </li>
        ))}
        {cart.length > 0 ? (
          <Link to={"/request-order"} className="flex my-auto">
            <p>{cart.length}</p>
            <CiShoppingCart size={25} />
          </Link>
        ) : (
          ""
        )}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full shadow-lg flex flex-col  px-2 pt-2 pb-10 capitalize md:hidden bg-mainBlue"
          >
            <div className="md:hidden ">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {navigationLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-ghost-white hover:text-periwinkle mx-auto my-2"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
