import "./styles.css";
import { useTranslation } from "react-i18next";
import CompleteArrowDownImg from "../../assets/images/CompleteArrowDown.svg";
import ProfileTempImg from "../../assets/images/profileTemp.webp";
import LanguageButton from "../LanguageButton/Components";
import { useCallback, useEffect, useState } from "react";
import isJwtTokenValid from "../../utils/validateToken";
import signoutService from "../../services/authentication/signout";
import { useNavigate } from "react-router-dom";
import resetLocalStorage from "../../utils/resetLocalStorage";
import LogoImg from "../../assets/images/logo.webp";
import NotificationsModal from "../NotificationsModal/Component";
import * as signalR from "@microsoft/signalr";
import updateNotifications from "../../services/notifications/notifications";

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [connection, setConnection] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const validateJwtToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        const isValid = isJwtTokenValid(token);

        if (isValid) {
          setIsSignedIn(true);
          setUserData(JSON.parse(localStorage.getItem("user")));
        } else {
          setIsSignedIn(false);

          resetLocalStorage();
        }
      }
    };

    validateJwtToken();
  }, []);

  const toggleDropDown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("hidden");
  };

  const toggleSideMenu = () => {
    // show or hide the sidebar
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("hide-sidebar");

    // show or hide the overlay (this is used to close the sidebar when clicking outside of it)
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("hidden");
  };

  // Toggle Notifications
  const toggleNotifications = useCallback(() => {
    setShowNotifications((prev) => !prev);
  }, []);

  // Initialize SignalR connection
  useEffect(() => {
    const token = localStorage.getItem("token");

    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.REACT_APP_API_URL}/notificationHub`, {
        accessTokenFactory: () => token, // Include token here
        transport: signalR.HttpTransportType.WebSockets,
        skipNegotiation: true,
      })
      .withAutomaticReconnect() // Optional: Automatically reconnect on disconnect
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    const connect = async () => {
      await updateNotifications(connection, setNotifications);
    };

    connect();
  }, [connection]);

  return (
    <>
      <nav className="navbar fixed h-[100px] w-full z-50 bg-black shadow-md">
        <header className="relative flex justify-between items-center py-3 mx-4 md:mx-10 max-h-24">
          <div className="flex items-center gap-5">
            {/* Mobile Menu Toggle Button */}
            <div className="block xl:hidden">
              <button
                id="menu-btn"
                className="focus:outline-none bg-transparent"
                onClick={toggleSideMenu}
                aria-label="Open Sidebar menu"
              >
                <svg
                  className="w-6 h-6"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1786 19.7143H0.821429C0.603572 19.7143 0.394639 19.8008 0.240591 19.9549C0.0865431 20.1089 0 20.3179 0 20.5357L0 22.1786C0 22.3964 0.0865431 22.6054 0.240591 22.7594C0.394639 22.9135 0.603572 23 0.821429 23H22.1786C22.3964 23 22.6054 22.9135 22.7594 22.7594C22.9135 22.6054 23 22.3964 23 22.1786V20.5357C23 20.3179 22.9135 20.1089 22.7594 19.9549C22.6054 19.8008 22.3964 19.7143 22.1786 19.7143ZM22.1786 13.1429H0.821429C0.603572 13.1429 0.394639 13.2294 0.240591 13.3834C0.0865431 13.5375 0 13.7464 0 13.9643L0 15.6071C0 15.825 0.0865431 16.0339 0.240591 16.188C0.394639 16.342 0.603572 16.4286 0.821429 16.4286H22.1786C22.3964 16.4286 22.6054 16.342 22.7594 16.188C22.9135 16.0339 23 15.825 23 15.6071V13.9643C23 13.7464 22.9135 13.5375 22.7594 13.3834C22.6054 13.2294 22.3964 13.1429 22.1786 13.1429ZM22.1786 6.57143H0.821429C0.603572 6.57143 0.394639 6.65797 0.240591 6.81202C0.0865431 6.96607 0 7.175 0 7.39286L0 9.03571C0 9.25357 0.0865431 9.4625 0.240591 9.61655C0.394639 9.7706 0.603572 9.85714 0.821429 9.85714H22.1786C22.3964 9.85714 22.6054 9.7706 22.7594 9.61655C22.9135 9.4625 23 9.25357 23 9.03571V7.39286C23 7.175 22.9135 6.96607 22.7594 6.81202C22.6054 6.65797 22.3964 6.57143 22.1786 6.57143ZM22.1786 0H0.821429C0.603572 0 0.394639 0.0865431 0.240591 0.240591C0.0865431 0.394639 0 0.603572 0 0.821429L0 2.46429C0 2.68214 0.0865431 2.89108 0.240591 3.04512C0.394639 3.19917 0.603572 3.28571 0.821429 3.28571H22.1786C22.3964 3.28571 22.6054 3.19917 22.7594 3.04512C22.9135 2.89108 23 2.68214 23 2.46429V0.821429C23 0.603572 22.9135 0.394639 22.7594 0.240591C22.6054 0.0865431 22.3964 0 22.1786 0Z"
                    fill="#FA8836"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu and Links (Hidden on Mobile) */}
            <div className="hidden xl:flex justify-between w-auto items-center gap-5 text-black">
              <div>
                <a
                  className="menu-item px-[10px]"
                  style={{ borderRadius: "35px" }}
                  href="/"
                >
                  <img className="h-14 object-cover" src={LogoImg} alt="logo" />
                </a>
              </div>
              <ul className="z-20 absolute w-[60%] flex flex-row justify-around gap-10 items-center left-1/2 -translate-x-[60%] rtl:right-0 rtl:left-0">
                <li>
                  <a
                    className="menu-item text-white font-bold text-lg transition-smooth hover:text-orange-500 rounded-[35px]"
                    href="/meetOurChefs"
                  >
                    {t("navigation.MeetOurChefs")}
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-white font-bold text-lg transition-smooth hover:text-orange-500 rounded-[35px]"
                    href="/events"
                  >
                    {t("navigation.events")}
                  </a>
                </li>
                {userData.allrole?.some(
                  (role) => role.toLowerCase() === "chef"
                ) && (
                  <li>
                    <a
                      className="block px-4 py-2 text-white font-bold text-lg transition-smooth hover:text-orange-500 rounded-[35px]"
                      href="/invites"
                    >
                      {t("navigation.invites")}
                    </a>
                  </li>
                )}
                {userData.allrole?.some(
                  (role) => role.toLowerCase() === "chef"
                ) && (
                  <li>
                    <a
                      className="menu-item text-white font-bold text-lg transition-smooth hover:text-orange-500 rounded-[35px]"
                      style={{ borderRadius: "35px" }}
                      href="/menus"
                    >
                      {t("navigation.menus")}
                    </a>
                  </li>
                )}
                <li>
                  <a
                    className="menu-item text-white font-bold text-lg transition-smooth hover:text-orange-500 rounded-[35px]"
                    href="/requests"
                  >
                    {t("navigation.requests")}
                  </a>
                </li>
                <li>
                  <a
                    className="menu-item text-white font-bold text-lg hover:text-orange-500 rounded-[35px]"
                    href="/Chat"
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <LanguageButton />
                </li>
              </ul>
            </div>
          </div>

          {/* Profile or Sign In */}
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              {/* Notification */}
              <div className="dropdown">
                <button
                  className="relative inline-block mr-5 bg-transparent"
                  onClick={() => toggleNotifications()}
                >
                  <i className="text-2xl md:text-3xl text-[#DADADA] fa-regular fa-bell"></i>

                  {notifications && notifications.length > 0 && (
                    <span
                      id="notificationCount"
                      className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#B3261E] rounded-full transform translate-x-1/2 -translate-y-1/2"
                    >
                      {notifications.length}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <NotificationsModal
                    notifications={notifications}
                    navigate={navigate}
                    toggleNotifications={toggleNotifications}
                  />
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative flex items-center gap-2">
                <button
                  className="flex items-center gap-2 bg-transparent"
                  onClick={() => {
                    toggleDropDown("Profiledropdown");
                  }}
                >
                  <img src={CompleteArrowDownImg} alt="icon" />
                  <span className="hidden md:block menu-item text-white hover:text-white-500 truncate">
                    {`${userData?.firstName} ${userData?.lastName?userData?.lastName:""}`}
                  </span>
                  <span className="sm:block md:hidden menu-item text-white hover:text-white-500 truncate">
                    {userData?.firstName}
                  </span>

                  <img
                    className="icon rounded-full w-12 h-12 object-cover"
                    src={
                      userData?.profileImageLink
                        ? userData.profileImageLink.includes("http")
                          ? userData.profileImageLink
                          : `${process.env.REACT_APP_API_URL}/${userData.profileImageLink}`
                        : ProfileTempImg
                    }
                   
                    alt="profileImage"
                  />
                </button>

                <div
                  id="Profiledropdown"
                  className="z-20 hidden top-10 w-36 dropdown-menu absolute right-0 md:right-4 mt-2 text-black bg-white shadow-lg rounded-lg text-center rtl:text-right"
                >
                  <a
                    className="block px-4 py-2 text-black transition-smooth hover:bg-gray-100"
                    href="/profile"
                  >
                    {t("navigation.profile")}
                  </a>
                  <div
                    className="px-3 py-2 text-black transition-smooth hover:bg-gray-100 flex items-center rtl:flex-row-reverse cursor-pointer"
                    onClick={() => signoutService(navigate)}
                  >
                    {t("navigation.signout")}
                    <i className="px-2 fa-solid fa-arrow-right-from-bracket"></i>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 w-24">
              <a
                className="bg-main-color text-white font-bold text-lg text-center p-2 rounded-[35px] w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-2 hover:border-main-color hover:text-main-color"
                href="/signin"
              >
                {t("navigation.signin")}
              </a>
            </div>
          )}
        </header>

        {/* Sidebar (Visble on Mobile Only)*/}
        <div
          className="hide-sidebar xl:hidden fixed inset-y-0 ltr:left-0 rtl:right-0 z-40 w-1/2 bg-[#2E2E2E] text-white transform transition-transform duration-300 ease-in-out"
          id="mobile-nav"
        >
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <a
                  className="menu-item px-[18px] flex justify-center items-center"
                  style={{ borderRadius: "35px" }}
                  href="/"
                >
                  <img className="h-14 object-cover" src={LogoImg} alt="logo" />
                </a>
              </li>
              <ul className="space-y-4 mt-10 border-t border-main-color">
                <li>
                  <a
                    className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                    href="/meetOurChefs"
                  >
                    {t("navigation.MeetOurChefs")}
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                    href="/events"
                  >
                    {t("navigation.events")}
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                    href="/invites"
                  >
                    {t("navigation.invites")}
                  </a>
                </li>

                <li>
                  <a
                    className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                    href="/menus"
                  >
                    {t("navigation.menus")}
                  </a>
                </li>

                <li>
                  <a
                    className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                    href="/requests"
                  >
                    {t("navigation.requests")}
                  </a>
                </li>
                <li>
                  <LanguageButton />
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div
          className="sidebar-overlay hidden"
          id="overlay"
          onClick={toggleSideMenu}
        ></div>
      </nav>
      <hr className="h-[100px]" />
    </>
  );
}

export default Navbar;
