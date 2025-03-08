import "./styles.css";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

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
            <a
              href="https://www.facebook.com/profile.php?id=61560800888332"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/foodiesnchefs"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <a href="/">{t("navigation.home")}</a>
            </li>
            <li>
              <a href="/events">{t("navigation.events")}</a>
            </li>
            <li>
              <a href="/invites">{t("navigation.invites")}</a>
            </li>
            <li>
              <a href="/menus">{t("navigation.menus")}</a>
            </li>
            <li>
              <a href="/requests">{t("navigation.requests")}</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>{t("navigation.copyrights")}</p>
      </div>
    </footer>
  );
}

export default Footer;
