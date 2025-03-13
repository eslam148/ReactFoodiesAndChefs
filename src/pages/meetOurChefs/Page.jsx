import { useEffect } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import FourImagesGroup from "../../components/FourImagesGroup/Component";
import Img1 from "../../assets/images/img1.webp";
import Img2 from "../../assets/images/img2.webp";
import Img3 from "../../assets/images/img3.webp";
import Img4 from "../../assets/images/img4.webp";
import Img5 from "../../assets/images/img5.webp";
import Img6 from "../../assets/images/img6.jpeg";
import Img7 from "../../assets/images/img7.jpeg";
import Img8 from "../../assets/images/img8.jpeg";
import ChefList from "../../components/ChefList/Component"
function MeetOurChefs() {
  const { t } = useTranslation();
  // const [invites, setInvites] = useState([]);

  useEffect(() => {
    // setInvites([]);
  }, []);

  return (
    <main
      className=" invites-page min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 plus-jakarta-sans"
      id="overlay"
    >
      <section className="min-h-screen mainbg *:text-white bg-white relative   space-y-6 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans box-border">
        <h2 className="text-black">
          {t("meetOurChefs.BenefitsofBookingPrivateChefs")}
        </h2>
        <p className="text-black">{t("meetOurChefs.IndulgeInaCulinary")}</p>
        <div className="text-black flex md:flex-row flex-col gap-5 justify-center items-center *:w-1/4 md:*:w-full px-32">
          <div className="flex flex-col gap-2 items-center  ">
            <i className="fa-solid fa-check text-main-color text-3xl"></i>

            <h3 className="text-xl text-main-color">{t("meetOurChefs.CustomizedMenus")}</h3>
            <p>{t("meetOurChefs.OurChefsCraft")}</p>
          </div>
          <div className="flex flex-col gap-2 items-center  ">
            <i className="fa-solid fa-check text-main-color text-3xl"></i>

            <h3 className="text-xl text-main-color">{t("meetOurChefs.FineDining")}</h3>
            <p>{t("meetOurChefs.EnjoyGourmet")}</p>
          </div>
          <div className="flex flex-col gap-2 items-center ">
            <i className="fa-solid fa-check text-main-color text-3xl"></i>
            <h3 className="text-xl text-main-color">{t("meetOurChefs.UniqueCulinary")}</h3>
            <p>{t("meetOurChefs.DelightYourGuests")}</p>
          </div>
        </div>

        <div className="bg-black rounded-3xl w-full p-20  flex flex-col gap-3">
          <h2 className="text-center text-main-color text-3xl md:text-5xl">
            {t("meetOurChefs.MeetOurChefs")}
          </h2>
          <p className="m-auto my-3 text-xl w-3/4">
            {t("meetOurChefs.Explorechefprofiles")}
          </p>
         <ChefList></ChefList>
          
        </div>

        <div className="bg-black rounded-3xl w-full p-20  flex flex-col gap-3 *:text-white">
          <h2 className="text-start text-main-color text-3xl md:text-5xl">
            {t("meetOurChefs.ExploreTopChefDishes")}
          </h2>
          <p className="m-auto my-3 text-xl w-3/4">
            {t("meetOurChefs.ExploreDiverse")}
          </p>

          <div className="flex  flex-wrap items-center md:items-start  justify-center *:w-full md:*:w-1/4 gap-5 my-10 px-5">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                className="object-cover w-32 h-32 rounded-xl"
                alt=""
              />
              <div>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-regular fa-star text-yellow-300"></i>
              </div>
              <p className="flex  w-2/3 text-center">
                Expert in traditional Italian dishes, known{" "}
              </p>
              <div className="self-start px-14 *:p-1">
                <i className="fa-regular fa-heart text-main-color "></i>
                <i className="fa-regular fa-paper-plane text-main-color"></i>
                <i className="fa-solid fa-cart-shopping text-main-color"></i>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                className="object-cover w-32 h-32 rounded-xl"
                alt=""
              />
              <div>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-regular fa-star text-yellow-300"></i>
              </div>
              <p className="flex  w-2/3 text-center">
                Expert in traditional Italian dishes, known{" "}
              </p>
              <div className="self-start px-14 *:p-1">
                <i className="fa-regular fa-heart text-main-color "></i>
                <i className="fa-regular fa-paper-plane text-main-color"></i>
                <i className="fa-solid fa-cart-shopping text-main-color"></i>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                className="object-cover w-32 h-32 rounded-xl"
                alt=""
              />
              <div>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-solid fa-star text-yellow-300"></i>
                <i className="fa-regular fa-star text-yellow-300"></i>
              </div>
              <p className="flex  w-2/3 text-center">
                Expert in traditional Italian dishes, known{" "}
              </p>
              <div className="self-start px-14 *:p-1">
                <i className="fa-regular fa-heart text-main-color "></i>
                <i className="fa-regular fa-paper-plane text-main-color"></i>
                <i className="fa-solid fa-cart-shopping text-main-color"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-3xl w-full p-20  flex flex-col gap-3">
          <h2 className="text-center text-main-color text-3xl md:text-5xl">
            {t("meetOurChefs.RecentEvents")}
          </h2>
          <p className="m-auto my-3 text-xl w-3/4  ">
            {t("meetOurChefs.DiscoverHowOurChefs")}
          </p>
          <div className="max-w-6xl mx-auto p-16 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <img
              src={Img1}
              className="w-full h-auto rounded-lg"
              alt="ChefEventImage"
            />
            <img src={Img2} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img3} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img4} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img5} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img6} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img7} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img8} className="w-full h-auto rounded-lg" alt="" />
            <img src={Img1} className="w-full h-auto rounded-lg" alt="" />
          </div>
        </div>
        <div className="  rounded-3xl w-full p-20  flex flex-col gap-3">
          <h2 className="text-start text-main-color text-3xl md:text-5xl">
            {t("meetOurChefs.WhatOurChefsareSaying")}
          </h2>
          <p className="m-auto my-3 text-xl w-3/4  ">
            {t("meetOurChefs.DiscoverHowOurChefs")}
          </p>
          <div>
            <div className="flex gap-6 md:flex-row flex-col *:w-full md:*:w-1/3">
              <div>
                <div className="flex gap-1 mt-6 justify-center *:text-3xl">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                </div>

                <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg   relative">
                  <div className="absolute -top-10 start-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                      className="object-cover w-32 h-32 rounded-xl"
                      alt=""
                    />
                  </div>

                  <p className="mt-2 text-sm ps-20">
                    <strong>Foodies & Chefs</strong> has transformed my
                    business! Their platform connects me with great clients, and
                    the easy-to-use CRM simplifies bookings and event
                    management, letting me focus on delivering exceptional
                    dining experiences.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex gap-1 mt-6 justify-center *:text-3xl">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
                <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg   relative">
                  <div className="absolute -top-10 start-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                      className="object-cover w-32 h-32 rounded-xl"
                      alt=""
                    />
                  </div>

                  <p className="mt-2 text-sm ps-20">
                    <strong>Foodies & Chefs</strong> has transformed my
                    business! Their platform connects me with great clients, and
                    the easy-to-use CRM simplifies bookings and event
                    management, letting me focus on delivering exceptional
                    dining experiences.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex gap-1 mt-6 justify-center *:text-3xl">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
                <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg   relative">
                  <div className="absolute -top-10 start-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src="/static/media/ServiceImg1.87ae2fb75f8ab27f6a8b.webp"
                      className="object-cover w-32 h-32 rounded-xl"
                      alt=""
                    />
                  </div>

                  <p className="mt-2 text-sm ps-20">
                    <strong>Foodies & Chefs</strong> has transformed my
                    business! Their platform connects me with great clients, and
                    the easy-to-use CRM simplifies bookings and event
                    management, letting me focus on delivering exceptional
                    dining experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-5 text-black flex flex-col justify-center items-center *:text-white ">
              <h2 className="  text-3xl md:text-4xl  ">
                {t("meetOurChefs.NeedMoreHelp")}
              </h2>
              <span className="p-2 border-t-2 border-main-color  my-2 ">
                {t("ContactUs")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-black items-center justify-center px-4 md:px-10 lg:px-14 w-full ">
          {/* Top Image Group */}
          <FourImagesGroup
            className="self-center md:self-start md:ms-10 lg:ms-20 lg:top-32"
            img1={Img1}
            img2={Img2}
            img3={Img3}
            img4={Img4}
          />

          {/* Heading */}
          <h2 className="text-center text-main-color text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
            {t("home.joinCommunity.title")}
          </h2>

          {/* Description */}
          <p className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] playwrite-us-modern text-sm md:text-lg lg:text-xl text-center leading-6 mt-3">
            {t("home.joinCommunity.description")}
          </p>

          {/* Button */}
          <button className="mt-5 bg-transparent text-lg border-2 border-main-color px-4 py-2 rounded-md hover:bg-main-color hover:text-white transition-all duration-300">
            {t("home.joinCommunity.button")}
          </button>

          {/* Bottom Image Group */}
          <FourImagesGroup
            className="self-center md:self-end md:end-20 md:bottom-20 md:me-10 lg:me-14 mt-10 lg:-mt-10"
            img1={Img5}
            img2={Img6}
            img3={Img7}
            img4={Img8}
          />
        </div>
      </section>
    </main>
  );
}

export default MeetOurChefs;
