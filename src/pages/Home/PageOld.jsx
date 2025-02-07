import ChefImg from "../../assets/images/HomeChefImg.webp";
import GroupChefsImg from "../../assets/images/GroupChefsImg.webp";
import LogoImg from "../../assets/images/logo.webp";
import ChefSlider from "../../components/ChefSlider/Component";
import ChefTempImg from "../../assets/images/chefTemp.webp";
import "./stylesHome.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const chefs = [
  { name: "Ahmed Hassan", location: "Alexandria, Egypt", image: ChefTempImg },
  { name: "Fatima Mahmoud", location: "Giza, Egypt", image: ChefTempImg },
  { name: "Omar Abdelrahman", location: "Luxor, Egypt", image: ChefTempImg },
  { name: "Sara Adel", location: "Aswan, Egypt", image: ChefTempImg },
  { name: "Khaled Youssef", location: "Hurghada, Egypt", image: ChefTempImg },
  { name: "Layla Mostafa", location: "Mansoura, Egypt", image: ChefTempImg },
  { name: "Hassan Alaa", location: "Port Said, Egypt", image: ChefTempImg },
  { name: "Waleed Sayed", location: "Ismailia, Egypt", image: ChefTempImg },
  { name: "Yasser Emam", location: "Cairo, Egypt", image: ChefTempImg },
  { name: "Ahmed Khaled", location: "Alexandria, Egypt", image: ChefTempImg },
  { name: "Fareed", location: "New Cairo, Egypt", image: ChefTempImg },
  { name: "Amgad Yasser", location: "Luxor, Egypt", image: ChefTempImg },
];

function HomePage() {
  // translation function
  const { t } = useTranslation();
  const steps = t("home.howItWorks.steps", { returnObjects: true });

  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input
  const [filteredChefs, setFilteredChefs] = useState(chefs);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Normalize the input
    setSearchTerm(value);

    // Filter the chefs based on the name or location
    const updatedChefs = chefs.filter(
      (chef) =>
        chef.name.toLowerCase().includes(value) ||
        chef.location.toLowerCase().includes(value)
    );
    setFilteredChefs(updatedChefs);
  };

  return (
    <main
      className="HomePage min-h-[80dvh] md:flex md:gap-10 mt-0 p-0"
      id="overlay"
    >
      <section className="playwrite-us-modern   py-16 box-border">
        <div className="flex md:justify-center items-center md:gap-10 gap-0  mb-12 flex-col md:flex-row">
          <div className="flex flex-col items-center w-[80%] md:w-[62%] justify-center space-y-10   ">
            <img
              className="md:max-w-56 max-w-40 object-cover"
              src={LogoImg}
              alt="HomeLogo"
            />

            <p className="playwrite-us-modern text-xl md:text-2xl text-justify leading-10 mx-2	px-5">
              {t("home.header.welcome")}{" "}
              <span className="text-main-color">Foodies & Chefs</span>{" "}
              {t("home.header.description")}
            </p>
          </div>
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] rounded-tl-[50px] rounded-br-[50px] hidden md:block"
              src={ChefImg}
              alt="ChefImg"
            />
            <img
              className="max-w-[80%] md:hidden block m-auto"
              src={GroupChefsImg}
              alt="GroupChefImg"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10 min-h-52 border-t-2 border-main-color py-12 mx-6">
          <h2 className="text-center md:text-start text-main-color text-4xl">
            {t("home.howItWorks.title")}
          </h2>
          <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3  gap-10 mx-5 ">
            {steps.map((step, index) => (
              <p
                key={index}
                className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color content-end text-justify px-3"
              >
                <span>{step.title}</span>
                <span>{step.description}</span>
                <span>{step.action}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-10 border-t-2 border-main-color py-12 mx-6 ">
          <div className="flex justify-between flex-wrap space-y-5 md:space-y-0">
            <h2 className="text-start text-main-color text-3xl md:text-5xl">
              {t("home.meetOurChefs.title")}
            </h2>
            <div className="flex w-full md:w-fit justify-end md:justify-start">
              <div className="flex ltr:flex-row rtl:flex-row-reverse">
                <div className="border-y-2 border-l-2 border-main-color rounded-l-full text-l px-2 py-1 h-9 bg-transparent flex items-center">
                  <i className="fa-solid fa-magnifying-glass text-lg"></i>
                </div>
                <input
                  placeholder={t("home.meetOurChefs.searchPlaceholder")}
                  className="bg-transparent text-main-color border-2 border-main-color border-l-0 rounded-r-full h-9 flex-grow px-3 focus:outline-none"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="container w-full">
              <ChefSlider chefs={filteredChefs} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
