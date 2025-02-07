import "./styles.css";
import logo from "../../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>

          <div className="footer-social">
            <a href="/" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="/" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Invites</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
