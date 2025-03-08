import { useLocation } from "react-router-dom";
import Navbar from "../Component";

function NavbarHider() {
  // check if to show navbar or no
  const location = useLocation();

  const routesWithoutNavbar = [
    "/signin",
    "/signup",
    "/verifyOtp",
    "/forgotPassword",
    "/forgotPassword/confirmEmail",
    "/resetPassword",
    "/MeetOurChefs",
    "/Chat"

  ];
  const hideNavbar = routesWithoutNavbar.includes(location.pathname);

  return <>{!hideNavbar && <Navbar />}</>;
}

export default NavbarHider;
