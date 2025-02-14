/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacebookImg from "../../../assets/images/facebook.svg";
import InstagramImg from "../../../assets/images/instagram.svg";
import XImg from "../../../assets/images/X.svg";
import DisFacebookImg from "../../../assets/images/DisFaceBook.svg";
import DisInstagramImg from "../../../assets/images/DisInstagram.svg";
import DisXImg from "../../../assets/images/DisX.svg";
import "./styles.css";
import { getEventByEventIdService } from "../../../services/events/events";

function ShowEventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    setChefs([
      {
        id: 1,
        name: "Yasser Emam",
        country: "Egypt",
        city: "Cairo",
        socialLinks: {
          facebook: "https://www.facebook.com/",
          instagram: "https://www.instagram.com/",
        },
      },
      {
        id: 2,
        name: "Magdy Salem",
        country: "Egypt",
        city: "Cairo",
        socialLinks: {
          facebook: "https://www.facebook.com/",
          X: "https://www.instagram.com/",
        },
      },
      {
        id: 3,
        name: "Ali Khaled",
        country: "Egypt",
        city: "Cairo",
        socialLinks: {
          instagram: "https://www.facebook.com/",
          X: "https://www.instagram.com/",
        },
      },
    ]);

    const updateEvent = async (eventId) => {
      const res = await getEventByEventIdService(eventId);

      if (res && res.success) {
        console.log(res.data);

        setEvent(res.data);
      }
    };

    updateEvent(eventId);
  }, []);

  return (
    <main
      className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0 "
      id="main-show-event"
    >
      <section className="min-h-screen  md:space-y-14 space-y-5 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
        <div className="bg-[#D9D9D926] md:w-12/12 w-full flex flex-col plus-jakarta-sans text-[13px] md:text-[23px] p-3 py-6 space-y-5 border border-main-color rounded-[5px]">
          <div className="flex">
            <span className="md:w-2/12  w-7/12">Event name: </span>
            <span className="w-10/12">{event?.eventName}</span>
          </div>
          <div className="flex">
            <span className="md:w-2/12 w-7/12">Description: </span>
            <span className="w-10/12">{event?.eventDescription}</span>
          </div>
          <div className="flex">
            <span className="md:w-2/12  w-7/12">Date and time:</span>
            <span className="w-10/12 tracking-wide" id="duration-output">
              This event will take place on
              <span className="text-main-color">{event.date}</span>
              <br /> From{" "}
              <span className="text-main-color">{event.startTime} </span>
              <br />
              until <span className="text-main-color">{event.endTime}</span>
            </span>
          </div>
          <div className="flex">
            <span className="md:w-2/12  w-7/12">Number of guests:</span>
            <span className="w-10/12">{`${event?.minNumberOfInvetation} to ${event?.maxNumberOfInvetation} Guests`}</span>
          </div>
          <div className="flex">
            <span className="md:w-2/12  w-7/12">Location: </span>
            <span className="w-10/12">{event?.generalLocation}</span>
          </div>
          {/* <div className="flex">
            <span className="md:w-2/12  w-7/12">
              Number of seats remaining:
            </span>
            <span className="w-10/12  m-auto">{event?.seatsRemaining}</span>
          </div> */}
        </div>

        <p className="plus-jakarta-sans text-[15px] md:text-[26px]    md:pb-4 md:w-1/2 w-full">
          To create a culinary menu for your event, choose one or more of the
          following options:
        </p>
        <ul className="plus-jakarta-sans text-[15px] md:text-[26px] border-b border-main-color pb-5 w-full">
          <li className="my-3">
            1- Send a culinary request for proposal to one or more of our
            renowned chefs
          </li>
          <li className="my-3">
            2- Share a culinary request for proposal through a link with chefs
            who are not on our list.
          </li>
          <li className="my-3">
            3- As a skilled chef, you may add one of your own menus to this
            event
          </li>
        </ul>
        <p className="plus-jakarta-sans text-[15px] md:text-[26px]  w-full text-start">
          1- Request an offer from our renowned chefs.
        </p>
        <div className="w-full">
          <table className="w-full rounded-[5px] overflow-hidden">
            <thead className="bg-[#D89D7240]  rounded-t-[5px]">
              <tr className="grid md:grid-cols-5 grid-cols-5 gap-2 md:gap-1 my-5 text-center">
                <th className="md:text-[22px] text-[0.5rem] w-full mx-3 md:text-start text-start">
                  Chef&#x2019;s Name
                </th>

                <th className="md:text-xl text-[0.5rem]">Country &amp; City</th>

                <th className="md:text-xl text-[0.5rem] col-span-2 md:col-span-1">
                  Social links
                </th>
                <th className="md:text-xl text-[0.5rem]">Send Invite</th>
                <th className="md:text-xl text-[0.5rem]">Favourite</th>
              </tr>
            </thead>
            <tbody className="bg-[#D9D9D926]">
              {chefs.map((chef, ind) => (
                <tr
                  key={ind}
                  className="grid md:grid-cols-5 grid-cols-6 gap-2 md:gap-2 my-5 text-center"
                >
                  <td className="text-start md:text-start md:text-[22px] mx-3 font-semibold text-[0.5rem] w-full">
                    <a href={`/chef/${chef.id}`} className="text-main-color">
                      {chef.name}
                    </a>
                  </td>
                  <td className="md:text-[22px] text-[0.5rem] font-semibold text-center ">
                    {`${chef.country}, ${chef.city}`}
                  </td>

                  <td className="md:text-[22px] text-[0.5rem] font-semibold col-span-2 md:col-span-1">
                    <div className="flex rounded-[10px]  p-1 md:p-3 px-2 justify-center items-center w-9/12 m-auto border border-[#949494] bg-[#222222]">
                      {chef.socialLinks.facebook ? (
                        <a href={chef.socialLinks.facebook}>
                          <img
                            className="w-1/2 m-auto"
                            src={FacebookImg}
                            alt="Facebook"
                          />
                        </a>
                      ) : (
                        <div>
                          <img
                            className="w-1/2 m-auto"
                            src={DisFacebookImg}
                            alt="Facebook"
                          />
                        </div>
                      )}

                      {chef.socialLinks.instagram ? (
                        <a href={chef.socialLinks.instagram}>
                          <img
                            className="w-1/2 m-auto"
                            src={InstagramImg}
                            alt="Instagram"
                          />
                        </a>
                      ) : (
                        <div>
                          <img
                            className="w-1/2 m-auto"
                            src={DisInstagramImg}
                            alt="Instagram"
                          />
                        </div>
                      )}

                      {chef.socialLinks.X ? (
                        <a href={chef.socialLinks.X}>
                          <img className="w-1/2 m-auto" src={XImg} alt="X" />
                        </a>
                      ) : (
                        <div>
                          <img className="w-1/2 m-auto" src={DisXImg} alt="X" />
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="flex justify-end md:justify-center ">
                    <button className="block text-white bg-[#6555FF] w-[45px] md:w-[113px] h-[16px] md:h-[36px] md:text-xl text-[0.5rem] text-center font-medium rounded-[15px] border-[3px] border-[#6555FF] drop-shadow-md shadow-[#6555FF]">
                      Send
                    </button>
                  </td>
                  <td className="flex justify-center ">
                    <i
                      id="fav-Icone"
                      className="text-main-color fa-regular fa-heart md:text-3xl"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-[#D9D9D926] rounded-b-[5px]">
              <tr>
                <td colSpan="7">
                  <div className="flex justify-center mt-6 gap-2   p-2 rounded-b-md">
                    <button
                      disabled
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                    >
                      <svg
                        className="rtl:block ltr:hidden"
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.72747 7.19041L2.46094 12.7137C2.09693 13.0954 1.50832 13.0954 1.14818 12.7137L0.273008 11.7958C-0.0910026 11.4141 -0.0910026 10.7968 0.273008 10.4191L4.00605 6.50406L0.273008 2.58903C-0.0910026 2.20728 -0.0910026 1.58997 0.273008 1.21228L1.14431 0.286317C1.50832 -0.0954389 2.09693 -0.0954389 2.45707 0.286317L7.7236 5.80959C8.09148 6.19135 8.09148 6.80865 7.72747 7.19041Z"
                          fill="black"
                        />
                      </svg>

                      <svg
                        className="ltr:block rtl:hidden"
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.272394 5.80959L5.53638 0.286317C5.90021 -0.0954389 6.48854 -0.0954389 6.8485 0.286317L7.72325 1.20415C8.08709 1.58591 8.08709 2.20322 7.72325 2.58091L3.99589 6.5L7.72712 10.415C8.09096 10.7968 8.09096 11.4141 7.72712 11.7918L6.85237 12.7137C6.48854 13.0954 5.90021 13.0954 5.54025 12.7137L0.276264 7.19041C-0.0914405 6.80865 -0.0914404 6.19135 0.272394 5.80959Z"
                          fill="black"
                        />
                      </svg>
                    </button>

                    <a
                      className="bg-orange-500 text-white font-semibold text-[10px] md:text-[16px] pt-2 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=1"
                    >
                      1
                    </a>
                    <a
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=2"
                    >
                      2
                    </a>
                    <a
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=3"
                    >
                      3
                    </a>
                    <a
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=4"
                    >
                      4
                    </a>
                    <button
                      disabled
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                    >
                      ...
                    </button>
                    <a
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=6"
                    >
                      6
                    </a>

                    <a
                      className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-2  px-2  md:px-3 py-1 rounded-md"
                      href="/Home/ChefOffers?eventId=d11453f6-3629-49b8-8bc7-08dd3fb439ca&amp;pagechef=2"
                    >
                      <svg
                        className="ltr:block rtl:hidden"
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.72747 7.19041L2.46094 12.7137C2.09693 13.0954 1.50832 13.0954 1.14818 12.7137L0.273008 11.7958C-0.0910026 11.4141 -0.0910026 10.7968 0.273008 10.4191L4.00605 6.50406L0.273008 2.58903C-0.0910026 2.20728 -0.0910026 1.58997 0.273008 1.21228L1.14431 0.286317C1.50832 -0.0954389 2.09693 -0.0954389 2.45707 0.286317L7.7236 5.80959C8.09148 6.19135 8.09148 6.80865 7.72747 7.19041Z"
                          fill="black"
                        />
                      </svg>

                      <svg
                        className="rtl:block ltr:hidden"
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.272394 5.80959L5.53638 0.286317C5.90021 -0.0954389 6.48854 -0.0954389 6.8485 0.286317L7.72325 1.20415C8.08709 1.58591 8.08709 2.20322 7.72325 2.58091L3.99589 6.5L7.72712 10.415C8.09096 10.7968 8.09096 11.4141 7.72712 11.7918L6.85237 12.7137C6.48854 13.0954 5.90021 13.0954 5.54025 12.7137L0.276264 7.19041C-0.0914405 6.80865 -0.0914404 6.19135 0.272394 5.80959Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* copy link Table */}
        <p className="plus-jakarta-sans text-[15px] md:text-[26px] border-t border-main-color w-full text-start pt-5 font-bold">
          2-Invite your favourite chef to submit their offer via this link
        </p>
        <div className="relative w-full flex justify-center items-center ">
          <div className="border-2 border-[#FA883669] text-center p-0.5 bg-[#73737354] w-full lg:w-3/4 lg:h-16 h-[38px] rounded-[30px] flex justify-between items-center">
            <button className="md:mx-7 mx-2 mb-1 md:mb-0 bg-transparent">
              <i className="fa-solid fa-link text-[#C9CED6] md:text-[20px] text-[10px]"></i>
            </button>
            <span className="hidden" id="linkToCopy">
              {`You have been invited to submit a culinary proposal for an
              exclusive venue. Please share your offer via this link:
              https://${process.env.REACT_APP_API_DOMAIN}/Chef/OrderPage/d11453f6-3629-49b8-8bc7-08dd3fb439ca`}
            </span>

            <span
              className="lg:py-8 py-0 lg:h-[85px] h-[27px] md:text-[15px] text-[9px] text-[#CFCFCF] font-bold"
              asp-controller="Chef"
              asp-action="OrderPage"
              asp-route-id="d11453f6-3629-49b8-8bc7-08dd3fb439ca"
            >
              Invite your favorite chefs to submit their culinary proposals
              through this link.
            </span>
            <button
              id="copyLinkButton"
              className="lg:h-[57px] h-[34px]  w-[90px]  md:w-[164px]  bg-main-color text-white lg:p-2 p-0 lg:text-sm text-[0.5rem] font-bold hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent  hover:border-[3px] hover:border-main-color hover:text-main-color rounded-[40px]"
            >
              Copy Link
            </button>
          </div>
        </div>
        <p className="plus-jakarta-sans text-[15px] md:text-[26px] border-t border-main-color pt-5 w-full font-bold">
          3- Showcase your talent by adding your own menu.
        </p>
        <form
          action="/Home/SetMySelfChef"
          className="flex flex-col items-center justify-center w-full space-x-5 border-b border-main-color pb-5"
        >
          <input
            type="hidden"
            name="EventId"
            value="d11453f6-3629-49b8-8bc7-08dd3fb439ca"
          />
          <div className="flex  items-center justify-center w-full space-x-5 ">
            <label htmlFor="Menu" className="text-[0.7rem] md:text-2xl">
              Menu
            </label>
            <select
              id="Menu"
              name="MenuId"
              className="text-xs	 md:text-xl appearance-none  md:w-5/12 w-2/3 px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-main-color  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
            >
              <option
                value="b755d17d-62f0-444a-5280-08dd3a30e7f0"
                className=" checked:bg-orange-100 bg-white text-black "
              >
                Menu Name
              </option>
            </select>
          </div>
          <div className="plus-jakarta-sans text-[12px] md:text-[20px] w-full text-start pt-5 font-bold">
            Please note:
            <br />
            Adding your own menu will override options 1 and 2.
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#6555FF] rounded-[15px] md:text-[30px]  w-[273px] md:w-[390px] h-[42px] md:h-[60px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]  "
            >
              Use My Menu
            </button>
          </div>
        </form>
        {/* Chefs request Table */}
        <div className="w-full flex justify-center items-center text-xs	 md:text-3xl m-15 font-bold		">
          your request for a culinary offer has not been accepted
          by&#xA0;any&#xA0;chef&#xA0;yet.
        </div>
      </section>
    </main>
  );
}

export default ShowEventPage;
