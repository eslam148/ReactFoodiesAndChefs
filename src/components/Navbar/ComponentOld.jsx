import { useTranslation } from "react-i18next";
import CompleteArrowDownImg from "../../assets/images/CompleteArrowDown.svg";
import ProfileTempImg from "../../assets/images/profileTemp.webp";
import LanguageButton from "../LanguageButton/Components";
import "./styles.css";
import { useEffect, useState } from "react";
import isJwtTokenValid from "../../utils/validateToken";
import signoutService from "../../services/authentication/signout";
import { useNavigate } from "react-router-dom";
import resetLocalStorage from "../../utils/resetLocalStorage";

function Navbar() {
  const { t } = useTranslation();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

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
    const element = document.getElementById("CreateEventMenu");

    if (element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }

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

  return (
    <nav>
      <header className="relative flex justify-between items-center py-3 mx-4 md:mx-10">
        <div className="flex items-center gap-5">
          {/* Mobile Menu Toggle Button */}
          <div className="block md:hidden">
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
          <div className="hidden md:flex items-center gap-5 text-black">
            <ul className="flex gap-10 items-center ">
              <li>
                <a
                  className="menu-item text-white font-bold text-lg hover:text-orange-500 px-[18px] py-[9px] bg-main-color"
                  style={{ borderRadius: "35px" }}
                  href="/"
                >
                  {t("navbar.home")}
                </a>
              </li>

              <div className="relative cursor-pointer">
                <button
                  className="px-[18px] py-[9px] flex items-center bg-transparent gap-2 text-white font-bold text-lg hover:text-orange-500 rounded-[35px] "
                  onClick={() => {
                    toggleDropDown("CreateEventMenu");
                  }}
                  style={{ borderRadius: "35px" }}
                >
                  {t("navbar.createEvent")}
                  <img src={CompleteArrowDownImg} alt="icon" />
                </button>

                <div
                  id="CreateEventMenu"
                  className="z-20 hidden dropdown-menu absolute start-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center"
                >
                  <a
                    className="block px-4 py-2 text-black transition-smooth hover:bg-gray-100 hover:font-bold"
                    href="/events/create"
                  >
                    {t("navbar.createEvent")}
                  </a>
                  <a
                    className="block px-4 py-2 text-black transition-smooth hover:bg-gray-100 hover:font-bold"
                    href="/events"
                  >
                    {t("navbar.events")}
                  </a>
                </div>
              </div>

              <li>
                <a
                  className="menu-item text-white font-bold text-lg hover:text-orange-500"
                  style={{ borderRadius: "35px" }}
                  href="/invites"
                >
                  {t("navbar.invites")}
                </a>
              </li>
              <li>
                <a
                  className="menu-item text-white font-bold text-lg hover:text-orange-500 rounded-[35px]"
                  style={{ borderRadius: "35px" }}
                  href="/menus"
                >
                  {t("navbar.myMenus")}
                </a>
              </li>
              <li>
                <a
                  className="menu-item text-white font-bold text-lg hover:text-orange-500 rounded-[35px]"
                  href="/requests"
                >
                  {t("navbar.requests")}
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
                id="notificationButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* Bell Icon */}
                <i className="text-2xl md:text-3xl text-[#DADADA] fa-regular fa-bell"></i>

                {/* Notification Badge */}
                <span
                  id="notificationCount"
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#B3261E] rounded-full transform translate-x-1/2 -translate-y-1/2"
                >
                  0
                </span>
              </button>

              <div
                id="notification-list"
                aria-labelledby="notificationButton"
                className="hidden z-20 top-12 w-3/4 md:w-4/12 absolute mt-2 text-black bg-white shadow-lg rounded-lg
                                ltr:right-20 rtl:left-20"
              >
                <div className="flex justify-between bg-[#D9D9D9] h-[38px] p-2 border-2 border-black">
                  <span className="font-semibold bg">Notifications</span>
                  <button id="close_Notification">
                    <svg
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2188 0H1.78125C0.797852 0 0 0.797852 0 1.78125V14.8438C0 15.8271 0.797852 16.625 1.78125 16.625H17.2188C18.2021 16.625 19 15.8271 19 14.8438V1.78125C19 0.797852 18.2021 0 17.2188 0ZM14.1164 10.7803C14.2945 10.9584 14.2945 11.2479 14.1164 11.426L12.6135 12.9289C12.4354 13.107 12.1459 13.107 11.9678 12.9289L9.5 10.4389L7.03223 12.9289C6.8541 13.107 6.56465 13.107 6.38652 12.9289L4.88359 11.426C4.70547 11.2479 4.70547 10.9584 4.88359 10.7803L7.37363 8.3125L4.88359 5.84473C4.70547 5.6666 4.70547 5.37715 4.88359 5.19902L6.38652 3.69609C6.56465 3.51797 6.8541 3.51797 7.03223 3.69609L9.5 6.18613L11.9678 3.69609C12.1459 3.51797 12.4354 3.51797 12.6135 3.69609L14.1164 5.19902C14.2945 5.37715 14.2945 5.6666 14.1164 5.84473L11.6264 8.3125L14.1164 10.7803Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  id="Notification-repet"
                  className="max-h-72 overflow-y-auto border-2 border-black border-t-0"
                >
                  {/* Notification Item */}

                  {/* Repeat more notifications as needed */}
                </div>
              </div>
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
                  {`${userData?.firstName} ${userData?.lastName}`}
                </span>
                <span className="sm:block md:hidden menu-item text-white hover:text-white-500 truncate">
                  {userData?.firstName}
                </span>

                <img
                  className="icon rounded-full w-12 h-12 object-cover"
                  src={
                    userData?.profileImageLink
                      ? `${process.env.REACT_APP_API_URL}/${userData.profileImageLink}`
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
                  {t("navbar.profile")}
                </a>
                <div
                  className="px-3 py-2 text-black transition-smooth hover:bg-gray-100 flex items-center rtl:flex-row-reverse cursor-pointer"
                  onClick={() => signoutService(navigate)}
                >
                  {t("navbar.signout")}
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
              {t("navbar.signin")}
            </a>
          </div>
        )}
      </header>

      {/* Sidebar (Visble on Mobile Only*/}
      <div
        className="hide-sidebar md:hidden fixed inset-y-0 ltr:left-0 rtl:right-0 z-40 w-1/2 bg-[#2E2E2E] text-white transform transition-transform duration-300 ease-in-out"
        id="mobile-nav"
      >
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                className="menu-item text-white font-bold text-lg hover:text-black px-[18px] py-[9px] bg-main-color"
                style={{ borderRadius: "35px" }}
                href="/"
              >
                {t("navbar.home")}
              </a>
            </li>
            <ul className="mt-10 border-y border-main-color">
              <li>
                <a
                  className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                  href="/events/create"
                >
                  {t("navbar.createEvent")}
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                  href="/events"
                >
                  {t("navbar.events")}
                </a>
              </li>
            </ul>

            <li>
              <a
                className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                href="/invites"
              >
                {t("navbar.invites")}
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                href="/menus"
              >
                {t("navbar.myMenus")}
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 rounded text-white font-bold text-lg hover:bg-gray-700"
                href="/requests"
              >
                {t("navbar.requests")}
              </a>
            </li>

            <li>
              <LanguageButton />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="sidebar-overlay hidden"
        id="overlay"
        onClick={toggleSideMenu}
      ></div>
    </nav>
  );
}

export default Navbar;
