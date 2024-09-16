import { navigationLinks } from "../../constants";
const Navbar = () => {
  return (
    <div>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
