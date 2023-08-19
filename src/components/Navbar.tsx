import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Images
import logo from "../assets/images/logo.png";

// Data
import navData from "../data/navbar.json";

// --------------

type NavbarProps = {
  isLanding: boolean;
};

function Navbar({ isLanding }: NavbarProps) {
  const [navActive, setNavActive] = useState<boolean>(false);

  /**
   * Hiding navigation on clicking a nav link (important in mobie view)
   */
  const handleLinkClick = () => {
    setNavActive(false);
  };

  /**
   * Hiding navigation on clicking a nav link (important in mobie view)
   */
  const handleInternalLinkClick = () => {
    setNavActive(false);
    window.scroll(0, 0);
  };

  /**
   * Toggle menu on clicking on menu btn
   */
  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header-holder">
      <div className="menu-wrapper center-relative relative">
        <div className="header-logo">
          <RouterLink to="/">
            <img src={logo} alt="Meelo" />
          </RouterLink>
        </div>

        <div className="toggle-holder">
          <div
            id="toggle"
            onClick={handleMenuBtnClick}
            className={navActive ? "on" : ""}
          >
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>

        <div className={`menu-holder ${navActive && "show"}`}>
          <nav id="header-main-menu">
            <ul className="main-menu sm sm-clean">
              {navData.navLinks.map((link, i) => (
                <li key={"navlink-" + i}>
                  {isLanding ? (
                    <ScrollLink
                      activeClass="active"
                      smooth
                      spy
                      to={link.to}
                      offset={-77}
                      onClick={handleLinkClick}
                    >
                      {link.text}
                    </ScrollLink>
                  ) : (
                    <RouterLink to="/" onClick={handleLinkClick}>
                      {link.text}
                    </RouterLink>
                  )}
                </li>
              ))}
              {navData.internalLinks.map((link, i) => (
                <li key={"internalLink-" + i}>
                  <RouterLink to="/blog" onClick={handleInternalLinkClick}>
                    {link.text}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="clear"></div>
      </div>
    </header>
  );
}

export default Navbar;
