import { navigationLinks } from "../../constants";

const Footer = () => {
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

export default Footer;
