/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import DateSVG from "../../../assets/svg/Date/Component";
import EmailSVG from "../../../assets/svg/Email/Component";
import LocationSVG from "../../../assets/svg/Location/Component";
import PhoneSVG from "../../../assets/svg/Phone/Component";
import ProfileSVG from "../../../assets/svg/Profile/Component";
import TimeSVG from "../../../assets/svg/Time/Component";
import LocationMap from "../../../components/LocationMap/Component";
import "./styles.css";
import { useEffect, useState } from "react";
import { getEventByEventIdService } from "../../../services/events/events";
import checkSignIn from "../../../utils/checkSignIn";
import { getAllMenusService } from "../../../services/menus/menus";

function ShowRequestPage() {
  const userData = JSON.parse(localStorage.getItem("user"));

  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const [menus, setMenus] = useState(null);
  // const [offer, setOffer] = useState({});
  const [request, setRequest] = useState(null);

  useEffect(() => {
    checkSignIn();
  });

  useEffect(() => {
    const updateVariables = async () => {
      getEventByEventIdService(eventId).then((res) => {
        if (res && res.success) {
          console.log(res);

          setEvent(res.data);
        }
      });

      getAllMenusService(1, 1000).then((res) => {
        if (res && res.success) {
          console.log(res);

          setMenus(res.data.data);
        }
      });
    };

    updateVariables();
  }, []);

  const handleSubmit = () => {
    console.log("Request Submitted");
  };

  const handleSave = () => {
    console.log("Request Saved");
  };

  return (
    <body className="relative overflow-x-hidden bg-black">
      <div className="md:block hidden absolute -top-[3rem] -right-[9rem] w-96 h-[44rem] bg-gradient-to-tr from-[#E06B17] to-[#FFB57F] transform rotate-45 z-10" />
      <div className="order-bg relative md:w-11/12 w-full m-0 md:m-20 px-0 md:px-10 md:py-28 py-14 rounded-[9px] z-20">
        <main className="min-h-[32rem] md:flex md:gap-10 mt-0 p-0" id="overlay">
          <section className="min-h-screen md:space-y-20 space-y-10 md:min-h-full flex flex-col w-full items-center justify-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
            <div className="flex flex-col space-y-10 h-full items-center justifiy-center">
              <h1 className="signika-negative name-text font-bold text-sm md:text-[40px] py-5">
                {userData && userData.firstName
                  ? `Hello, Chef ${userData.firstName}`
                  : ""}
              </h1>
              <p className="Monotype-Corsiva text-main-color md:text-3xl text-lg italic font-normal md:w-9/12">
                “We are honored to invite you to dazzle our guests with your
                signature dishes at this exclusive event. Your talent will add
                an unforgettable magic touch!”
              </p>
            </div>
            <div className="flex flex-col space-y-10 h-full self-start mx=0 md:mx-24 font-extrabold text-2xl md:w-10/12 w-full">
              <div className="flex items-center text-[0.7rem] md:text-2xl">
                <ProfileSVG />
                <span>
                  Host Name: {event?.userHost.firstName}{" "}
                  {event?.userHost.lastName}
                </span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl ">
                <EmailSVG />
                <span>Host Email: {event?.userHost.email}</span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl ">
                <PhoneSVG />
                <span>Host Phone: {event?.userHost.phoneNumber}</span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl ">
                <ProfileSVG />
                <span>Event name: {event?.eventName}</span>
              </div>

              <div className="flex items-center text-[0.7rem] md:text-2xl">
                <ProfileSVG />
                <span>Description: {event?.eventDescription}</span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl">
                <ProfileSVG />
                <span>{`Number of guests: Minimum (${event?.minNumberOfInvetation} to ${event?.maxNumberOfInvetation}) Maximum`}</span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl">
                <DateSVG />
                <span>Date: {event?.date?.split("T")[0]} </span>
              </div>
              <div className="flex items-center text-[0.7rem] md:text-2xl">
                <TimeSVG />
                <span>{`Time: From ${event?.startTime
                  ?.split("T")[1]
                  .substring(0, 5)} - to ${event?.endTime
                  ?.split("T")[1]
                  .substring(0, 5)} `}</span>
              </div>
              <div className="flex items-center   text-[0.7rem] md:text-2xl ">
                <LocationSVG />
                <span className="text-start">
                  Location: {event?.generalLocation}
                </span>
              </div>

              {/* Google Maps Location */}
              <div
                id="container"
                className="flex relative w-full h-64 justify-center items-center rtl:direction-rtl ltr:direction-ltr"
              >
                <LocationMap
                  location={event?.generalLocation}
                  latitude={event?.latitude}
                  longitude={event?.longitude}
                />
              </div>

              <div className="flex items-center border-y border-[#FA8836] py-10 ">
                <div className="flex justify-around w-full">
                  <label
                    htmlFor="price"
                    className="text-white font-semibold text-[12px] md:text-[27px] "
                  >
                    Cost/Guest:
                  </label>
                  <div className="flex items-center   justify-center md:w-5/12 w-8/12">
                    {/* <!-- Price Input --> */}
                    <input
                      name="price"
                      id="Price"
                      type="number"
                      placeholder="Price"
                      className="w-1/2 bg-[#D9D9D954] text-white border border-[#C0C0C0] rounded-none h-[20px] md:h-[34px] p-2 md:text-[15px] text-[7px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={request?.cost}
                      onChange={(e) =>
                        setRequest((prev) => ({
                          ...prev,
                          cost: e.target.value,
                        }))
                      }
                    />
                    {/* <!-- Currency Dropdown --> */}
                    <select
                      name="ChefCurrancy"
                      id="currancy"
                      className="md:w-1/2  hover:text-black bg-[#D9D9D954] border border-[#C0C0C0] border-s-0  text-white h-[20px] md:h-[34px] md:text-[15px] text-[7px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="AED">AED</option>
                      <option value="ARS">ARS</option>
                      <option value="BGN">BGN</option>
                      <option value="BHD">BHD</option>
                      <option value="BRL">BRL</option>
                      <option value="CAD">CAD</option>
                      <option value="CHF">CHF</option>
                      <option value="CLP">CLP</option>
                      <option value="COP">COP</option>
                      <option value="CZK">CZK</option>
                      <option value="DKK">DKK</option>
                      <option value="DOP">DOP</option>
                      <option value="EGP" selected>
                        EGP
                      </option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="HNL">HNL</option>
                      <option value="HRK">HRK</option>
                      <option value="HUF">HUF</option>
                      <option value="IQD">IQD</option>
                      <option value="IRR">IRR</option>
                      <option value="ISK">ISK</option>
                      <option value="JOD">JOD</option>
                      <option value="KWD">KWD</option>
                      <option value="MXN">MXN</option>
                      <option value="NIO">NIO</option>
                      <option value="NOK">NOK</option>
                      <option value="OMR">OMR</option>
                      <option value="PEN">PEN</option>
                      <option value="PLN">PLN</option>
                      <option value="PYG">PYG</option>
                      <option value="QAR">QAR</option>
                      <option value="RON">RON</option>
                      <option value="RUB">RUB</option>
                      <option value="SAR">SAR</option>
                      <option value="SEK">SEK</option>
                      <option value="SVC">SVC</option>
                      <option value="SYP">SYP</option>
                      <option value="TRY">TRY</option>
                      <option value="USD">USD</option>
                      <option value="UYU">UYU</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around">
                <label htmlFor="Menu" className="text-[0.7rem] md:text-2xl">
                  Menu :
                </label>
                {menus && menus.length > 0 ? (
                  <select
                    id="Menu"
                    name="MenuId"
                    className="text-xs md:text-xl appearance-none  md:w-1/2 w-2/3 px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-[#FA8836]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                  >
                    {menus.map((menu) => (
                      <option
                        selected
                        className=" checked:bg-orange-100 bg-white text-black "
                      >
                        {menu.menuName}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div value="createMenu" className="text-white ">
                    You don't have menus,{" "}
                    <a
                      href="/menus/create"
                      className="bg-transparent text-main-color"
                    >
                      Create Menu
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-around">
                <label htmlFor="Note" className="text-[0.7rem] md:text-2xl">
                  Notes :
                </label>
                <textarea
                  id="Note"
                  name="Notes"
                  className="text-xs md:text-xl appearance-none  md:w-1/2 w-2/3 px-4 py-2 rounded-[10px] text-white opacity-70 h-[70px] md:h-[101px]    border border-[#FA8836]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                ></textarea>
              </div>
              <div className="flex items-center justify-center gap-5">
                <button
                  onClick={handleSubmit}
                  className="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#FA8836] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836]  "
                >
                  Accept
                </button>
                <button
                  className="md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#6555FF] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px] border-[3px] border-[#7163FF59] drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  );
}

export default ShowRequestPage;
