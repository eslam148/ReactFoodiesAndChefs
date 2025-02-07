import DateSVG from "../../assets/svg/Date/Component";
import EmailSVG from "../../assets/svg/Email/Component";
import LocationSVG from "../../assets/svg/Location/Component";
import PhoneSVG from "../../assets/svg/Phone/Component";
import ProfileSVG from "../../assets/svg/Profile/Component";
import TimeSVG from "../../assets/svg/Time/Component";
import "./styles.css";

function OrderPage() {
  return (
    <body class="relative overflow-x-hidden bg-black">
      <div class="md:block hidden absolute -top-[3rem] -right-[9rem] w-96 h-[44rem] bg-gradient-to-tr from-[#E06B17] to-[#FFB57F] transform rotate-45 z-10" />
      <div class="order-bg relative md:w-11/12 w-full m-0 md:m-20 px-0 md:px-10 md:py-28 py-14 rounded-[9px] z-20">
        <main class="min-h-[32rem] md:flex md:gap-10 mt-0 p-0" id="overlay">
          <section class="min-h-screen md:space-y-20 space-y-10 md:min-h-full flex flex-col w-full items-center justify-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
            <div class="flex flex-col space-y-10 h-full items-center justifiy-center">
              <h1 class="signika-negative name-text font-bold text-sm md:text-[40px] py-5">
                Hello, Chef Yasser
              </h1>
              <p class="Monotype-Corsiva text-main-color md:text-3xl text-lg italic font-normal md:w-9/12">
                “We are honored to invite you to dazzle our guests with your
                signature dishes at this exclusive event. Your talent will add
                an unforgettable magic touch!”
              </p>
            </div>
            <div class="flex flex-col space-y-10 h-full self-start mx=0 md:mx-24 font-extrabold text-2xl md:w-10/12 w-full">
              <div class="flex items-center text-[0.7rem] md:text-2xl">
                <ProfileSVG />
                <span>Host Name: Yasser Emam</span>
              </div>
              <div class="flex items-center text-[0.7rem] md:text-2xl ">
                <EmailSVG />
                <span>Host Email: yasseremam2002@gmail.com</span>
              </div>
              <div class="flex items-center text-[0.7rem] md:text-2xl ">
                <PhoneSVG />
                <span>Host Phone: </span>
              </div>
              <div class="flex items-center text-[0.7rem] md:text-2xl ">
                <ProfileSVG />
                <span>Event name: Tech Conference 2025</span>
              </div>

              <div class="flex items-center text-[0.7rem] md:text-2xl">
                <ProfileSVG />
                <span>
                  Description: An annual technology conference featuring
                  keynotes, workshops, and networking opportunities.
                </span>
              </div>
              <div class="flex items-center text-[0.7rem] md:text-2xl ">
                <ProfileSVG />
                <span>Number of guests: Minimum (50 to 500) Maximum</span>
              </div>
              <div class="md:flex flex-col md:flex-row space-y-5 md:space-y-0 text-[0.7rem] md:text-2xl ">
                <div class="flex ">
                  <DateSVG />
                  <span>Date: Mon 15-Sep-2025 </span>
                </div>
                <div class="flex md:mx-10 mx-0">
                  <TimeSVG />
                  <span>{`Time: { From 11:00 } - { to 19:00 } `}</span>
                </div>
              </div>
              <div class="flex items-center   text-[0.7rem] md:text-2xl ">
                <LocationSVG />
                <span class="text-start">Location: San Francisco, CA</span>
              </div>

              <div
                id="container"
                class="flex relative w-full h-64 justify-center items-center rtl:direction-rtl ltr:direction-ltr"
              >
                <div
                  id="map"
                  class="absolute w-full h-60 bg-orange-500 z-10 ltr:left-0 rtl:right-0"
                >
                  <input
                    id="lat"
                    value="37.7749"
                    class="hidden form-control"
                    readonly
                  />
                  <input
                    id="log"
                    value="-122.4194"
                    class="hidden form-control"
                    readonly
                  />
                </div>
              </div>
              <div class="flex items-center border-y border-[#FA8836] py-10 ">
                <div class="flex justify-around w-full">
                  <label
                    for="price"
                    class="text-white font-semibold text-[12px] md:text-[27px] "
                  >
                    Cost/Guest:
                  </label>
                  <div class="flex items-center   justify-center md:w-5/12 w-8/12">
                    {/* <!-- Price Input --> */}
                    <input
                      name="price"
                      id="Price"
                      type="number"
                      class="w-1/2 bg-[#D9D9D954] text-white border border-[#C0C0C0] rounded-none h-[20px] md:h-[34px] p-2 md:text-[15px] text-[7px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* <!-- Currency Dropdown --> */}
                    <select
                      name="ChefCurrancy"
                      id="currancy"
                      class="md:w-1/2  hover:text-black bg-[#D9D9D954] border border-[#C0C0C0] border-s-0  text-white h-[20px] md:h-[34px] md:text-[15px] text-[7px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      <option value="EGP">EGP</option>
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

                  <span
                    class=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="price"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="flex items-center justify-around">
                <label for="Menu" class="text-[0.7rem] md:text-2xl">
                  Menu :{" "}
                </label>
                <select
                  id="Menu"
                  name="MenuId"
                  class="text-xs md:text-xl appearance-none  md:w-1/2 w-2/3 px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-[#FA8836]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                  data-val="true"
                  data-val-required="The MenuId field is required."
                >
                  <option
                    selected
                    class=" checked:bg-orange-100 bg-white text-black "
                  >
                    No Menu
                  </option>
                  <option value="createMenu" class=" bg-white text-black ">
                    {" "}
                    No items to select here, please “
                    <span class="text-[#FA8836]"> Create Menu</span>”{" "}
                  </option>
                </select>
              </div>

              <div class="flex items-center justify-around">
                <label for="Note" class="text-[0.7rem] md:text-2xl">
                  Notes :{" "}
                </label>
                <textarea
                  id="Note"
                  name="Notes"
                  class="text-xs md:text-xl appearance-none  md:w-1/2 w-2/3 px-4 py-2 rounded-[10px] text-white opacity-70 h-[70px] md:h-[101px]    border border-[#FA8836]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                ></textarea>
              </div>
              <div class="flex items-center justify-center gap-5">
                <button
                  type="submit"
                  class="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#FA8836] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836]  "
                >
                  Accept
                </button>
                <a
                  class="md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#6555FF] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px] border-[3px] border-[#7163FF59] drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
                  href="/Chef/SaveOrder?eventId=64475382-4e05-4669-17b1-08dd44dd8ea3"
                >
                  Save
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  );
}

export default OrderPage;
