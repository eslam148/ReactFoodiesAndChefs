import "./styles.css";
import logo from "../../assets/images/logo.webp";

function Navbar() {
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <ul className="nav-links">
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
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
