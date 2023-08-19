// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../assets/images/logo.png";

// Icons
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

// ---------------

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={logo} alt="Meelo" />
        </div>

        <div className="footer-mail">
          <a href="mailto:hello@site.com">hello@cocobasic.com</a>
        </div>

        <div className="footer-phone">
          <a href="tel:123456789">+123.456.789</a>
        </div>

        <div className="social-holder">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>

        <div className="copyright-holder">
          © {new Date().getFullYear()} Meelo React Template by{" "}
          <a href="https://cocobasic.com">CocoBasic</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
