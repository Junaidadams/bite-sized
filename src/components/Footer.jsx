import { navigationLinks, websiteInformation } from "../../constants";

const Footer = () => {
  const socials = websiteInformation.socials;
  return (
    <div>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        {socials.map(({ social, logo: Logo }) => (
          <li key={social.key}>
            <a href={social.link}>
              <Logo />
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
