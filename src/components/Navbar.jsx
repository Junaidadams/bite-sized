import { navigationLinks } from "../../constants";
const Navbar = () => {
  return (
    <div className="flex bg-mainWhite">
      <ul className="space-x-8 capitalize pl-8 rounded-bl-full flex flex-row ml-auto text-mainBlack bg-mainBlue pb-6 pt-4">
        {navigationLinks.map((link) => (
          <li key={link.key} className="px-3">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
