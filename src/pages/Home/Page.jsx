import GroupChefsImg from "../../assets/images/GroupChefsImg.webp";
import "./styles.css";
import HeaderImg from "../../assets/images/HomePageImage.webp";
import OurMissionImg from "../../assets/images/ourMission.webp";
import ServiceImg1 from "../../assets/images/ServiceImg1.webp";
import ServiceImg2 from "../../assets/images/ServiceImg2.jpg";
import ServiceImg3 from "../../assets/images/ServiceImg3.png";
import FourImagesGroup from "../../components/FourImagesGroup/Component";
import Img1 from "../../assets/images/img1.webp";
import Img2 from "../../assets/images/img2.webp";
import Img3 from "../../assets/images/img3.webp";
import Img4 from "../../assets/images/img4.webp";
import Img5 from "../../assets/images/img5.webp";
import Img6 from "../../assets/images/img6.jpeg";
import Img7 from "../../assets/images/img7.jpeg";
import Img8 from "../../assets/images/img8.jpeg";
import { useTranslation } from "react-i18next";
import isJwtTokenValid from "../../utils/validateToken";
import {  useEffect, useState } from "react";
import resetLocalStorage from "../../utils/resetLocalStorage";

const howItWorksSteps = [
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "home.howItWorks.steps.step1.title",
    description: "home.howItWorks.steps.step1.description",
  },
  {
    icon: "fa-solid fa-utensils",
    title: "home.howItWorks.steps.step2.title",
    description: "home.howItWorks.steps.step2.description",
  },

  {
    icon: "fa-solid fa-share-from-square",
    title: "home.howItWorks.steps.step3.title",
    description: "home.howItWorks.steps.step3.description",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "home.howItWorks.steps.step4.title",
    description: "home.howItWorks.steps.step4.description",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "home.howItWorks.steps.step5.title",
    description: "home.howItWorks.steps.step5.description",
  },
  
  {
    icon: "fa-solid fa-envelope",
    title: "home.howItWorks.steps.step7.title",
    description: "home.howItWorks.steps.step7.description",
  },
];

function HomePage() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

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
  return (
    <main
      className="HomePage min-h-[80dvh] md:flex md:gap-10 mt-0 p-0"
      id="overlay"
    >
      <section className="playwrite-us-modern py-16 box-border">
        {/* Header Section */}
        <div className="flex md:justify-center items-center md:gap-10 gap-0 my-12 flex-col md:flex-row">
          <div className="flex flex-col items-start w-[80%] md:w-[62%] justify-center space-y-10">
            <p className="mx-2 text-center self-center text-2xl md:text-3xl lg:text-4xl font-bold">
              {t("home.header.where")} <div className="mb-2" />
              <span className="text-main-color">
                {t("home.header.highlight")}
              </span>
              <div className="mb-2" />
              {t("home.header.meetExperience")}
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl text-justify leading-10 mx-2 px-5">
              {t("home.header.description")}
            </p>
          </div>
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] hidden md:block shadow-md shadow-main-color rounded-xl"
              src={HeaderImg}
              alt="ChefImg"
            />
            <img
              className="max-w-[80%] md:hidden block m-auto"
              src={GroupChefsImg}
              alt="GroupChefImg"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex md:justify-center items-center md:gap-10 gap-0 py-14 lg:px-5 my-12 flex-col md:flex-row border-t-2 border-main-color">
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] hidden md:block shadow-md shadow-main-color rounded-xl"
              src={OurMissionImg}
              alt="ChefImg"
            />
          </div>
          <div className="flex flex-col items-start w-[80%] md:w-[62%] justify-center space-y-10">
            <p className="mx-2 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-main-color">{t("home.mission.title")}</span>
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl text-justify leading-5 mx-2 px-5">
              <span className="text-main-color">
                {t("home.mission.details.about")}:{" "}
              </span>
              {t("home.mission.details.aboutDescription")}
              <div className="mb-4" />
              <span className="text-main-color">
                {t("home.mission.details.mission")}:{" "}
              </span>
              {t("home.mission.details.missionDescription")}
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center md:justify-center md:gap-10 gap-6 py-14 my-12 border-t-2 border-main-color">
          {/* Text Section */}
          <div className="flex flex-col items-center w-[90%] md:w-[80%] text-center space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold md:self-start">
              <span className="text-main-color">
                {t("home.services.title")}
              </span>
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl">
              {t("home.services.description")}
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-20  gap-6 justify-center">

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg1}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-2 px-4 mt-4">
                <h2 className="text-lg font-bold">
                  {t("home.services.details.service1.title")}
                </h2>
                <div className="mb-4" >
                <p className="text-xs leading-5 px-2 mt-2 text-start">
                  {t("home.services.details.service1.description")}
                </p>
                </div>
                <div className="mb-5" >
                <a href="/meetOurChefs" className="text-white rounded-[10px] mt-3 bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1">
                  {t("home.services.details.service1.button")}
                </a>
                </div>
               
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg2}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-2 px-4 mt-4">
                <h2 className="text-lg font-bold">
                  {t("home.services.details.service2.title")}
                </h2>
                <div className="mb-10" >
                <p className="text-xs leading-5 px-4 text-start">
                  {t("home.services.details.service2.description")}
                </p>
                </div>
                <div className="mb-5" >
                <a href="/meetOurChefs" className="text-white bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1 rounded-[10px]">
                  {t("home.services.details.service2.button")}
                </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg3}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-2 px-4 mt-4">
                <h2 className="text-lg font-bold">
                  {t("home.services.details.service3.title")}
                </h2>
                <div className="mb-5" >
                <p className="text-xs leading-5 px-4 text-start">
                  {t("home.services.details.service3.description")}
                </p>
                </div>
                <div className="mb-4" >
                <a href="/events/create" className="text-white bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1 rounded-[10px]">
                  {t("home.services.details.service3.button")}
                </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* How It works */}
        <div className="flex flex-col space-y-10 min-h-52 border-t-2 border-main-color py-12 mx-6">
          <h2 className="font-bold text-center text-white text-2xl sm:text-3xl lg:text-4xl">
            {t("home.howItWorks.title")}:{" "}
            <span className="text-main-color">
              {t("home.howItWorks.highlight")}
            </span>{" "}
            {t("home.howItWorks.description")}
          </h2>
          <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap gap-8 sm:gap-10">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 max-w-full sm:max-w-32"
              >
                <i className={`${step.icon} text-main-color`} />
                <h2 className="text-sm font-bold">{t(step.title)}</h2>
                <p className="text-xs text-center">{t(step.description)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Community */}
        <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-14 border-t-2 border-main-color">
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
          {!userData?.allrole?.includes("Chef") ?(
            <a 
              href="/signup" 
              className="text-white mt-5 bg-transparent text-lg border-2 border-main-color px-4 py-2 rounded-md hover:bg-main-color hover:text-white transition-all duration-300"
            >
              {t("home.joinCommunity.button")}
            </a>
          ):""}
         

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

export default HomePage;
