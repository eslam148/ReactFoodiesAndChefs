import "./styles.css";
import DateSVG from "../../../assets/svg/Date/Component";
import EmailSVG from "../../../assets/svg/Email/Component";
import LocationSVG from "../../../assets/svg/Location/Component";
import MoneySVG from "../../../assets/svg/Money/Component";
import PhoneSVG from "../../../assets/svg/Phone/Component";
import ProfileSVG from "../../../assets/svg/Profile/Component";
import TimeSVG from "../../../assets/svg/Time/Component";
import LocationMap from "../../../components/LocationMap/Component";
import DishImg from "../../../assets/images/img3.webp";
import LogoImg from "../../../assets/images/logoWithoutText.png";
import Spoon1Img from "../../../assets/images/spoon1.png";
import Spoon2Img from "../../../assets/images/spoon2.png";
import Spoon3Img from "../../../assets/images/spoon3.png";

function InvitationCardPage() {
  return (
    <>
      <div className="inv-card-bg-img-1 w-full flex flex-col justify-center items-center bg-[#000000D9] h-[10rem]">
        <div />
        <img className="my-auto z-10" src={LogoImg} alt="" />
      </div>

      <main
        className="min-h-[32rem] flex justify-center w-full text-[#F1F1F1]"
        id="overlay"
      >
        <div className="w-full h-full npm bg-cover bg-no-repeat flex flex-col">
          <h1 className="font-ledger font-normal text-center md:text-[40px] text-lg text-[#F1F1F1] p-5 pb-5">
            The Greatest Event
          </h1>
          <p className="mb-5 mx-8 md:mb-10 plus-jakarta-sans text-center text-[#FA8836] md:text-[22px] text-sm italic font-normal">
            Get ready for a day of fun, laughter, and unforgettable memories as
            we celebrate mohamed’s special day!
          </p>
          <div className="flex flex-col lg:space-y-10 space-y-3  h-full self-start mx=0 md:mx-24 font-extrabold text-2xl text-[#F1F1F1] md:w-10/12 w-full">
            <div className="flex items-center text-[0.7rem] md:text-2xl ">
              <ProfileSVG />
              <span>Yasser Emam</span>
            </div>
            <div className="flex items-center text-[0.7rem] md:text-2xl">
              <EmailSVG />
              <span>yasser@gmail.com</span>
            </div>
            <div className="flex items-center text-[0.7rem] md:text-2xl ">
              <PhoneSVG />
              <span>0102145235</span>
            </div>

            <div className="flex items-center text-[0.7rem] md:text-2xl">
              <MoneySVG />
              <span>$100 Per person</span>
            </div>

            <div className="md:flex flex-col md:flex-row space-y-5 md:space-y-0 text-[0.7rem] md:text-2xl ">
              <div className="flex ">
                <DateSVG />
                <span>1/9/2024</span>
              </div>
              <div className="flex md:mx-10 mx-0">
                <TimeSVG />
                <span> {`{ Start 8:00 } - { End 11:30 } `} </span>
              </div>
            </div>
            <div className="flex items-center text-[0.7rem] md:text-2xl">
              <LocationSVG />
              <span>Zahraa ,Nasr city, Egypt</span>
            </div>

            <div className="flex relative w-full md:w-2/3 md:h-56 h-64 justify-center items-center">
              <LocationMap
                location="Zahraa ,Nasr city, Egypt"
                latitude="30.06263"
                longitude="31.3467"
              />
            </div>

            {/* Give some space under the map */}
            <div className="h-10 " />
          </div>
          <div className="flex flex-col justify-center items-center w-full relative">
            <div className="inv-card-bg-img-1 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-10 before:bg-[#00000080] flex flex-col justify-center items-center w-full npm bg-no-repeat min-h-60">
              <div className="z-20 w-full">
                <h2 className="handlee-regular text-xl md:text-6xl">
                  Our Menu
                </h2>
                <p className="uppercase text-2xl md:text-4xl">
                  Special Dishes for you
                </p>
              </div>
            </div>
            <form
              method="post"
              asp-action="InvetationPage"
              className="min-h-fit flex flex-col items-center justify-center bg-[#000000D9] md:npm ')] bg-no-repeat bg-cover w-full relative z-20"
            >
              <input type="hidden" name="EventId" value="@Event.id" />

              <div className="relative w-full flex flex-col items-center justify-center mb-20">
                {/* Three spoons */}
                <img
                  className="w-[48rem] h-auto absolute -start-[12rem] top-0 -translate-x-10 -z-20"
                  src={Spoon1Img}
                  alt=""
                />
                <img
                  className="w-[48rem] h-auto absolute -start-[4rem] top-[15rem] -translate-x-10 -z-20"
                  src={Spoon2Img}
                  alt=""
                />
                <img
                  className="w-[48rem] h-auto absolute -start-[12rem] top-[30rem] -translate-x-10 -z-20"
                  src={Spoon3Img}
                  alt=""
                />

                <div className="mainbg-dark max-h-fit flex flex-col npm bg-no-repeat bg-auto w-11/12 md:w-9/12 items-center z-10 -translate-y-8">
                  {/* Chef name */}
                  <p className="font-ledger text-3xl text-[#FA8836] uppercase w-11/12 border-t-2 border-[#FA8836] pt-5 mt-14 text-center">
                    Chef: Yasser Emam
                  </p>

                  {/* Menu Section */}
                  <div className="md:flex hidden justify-between items-start p-5 md:p-14 w-full">
                    <div className="w-1/2 text-start">
                      <span className="mogra-regular name-text md:text-4xl text-xl">
                        Amuse Bouche
                      </span>
                      <p className="Interl md:text-l text-lg font-medium">
                        Amuse Bouche Description
                      </p>
                    </div>

                    <img
                      src={DishImg}
                      className="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration ease-in-out"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                    <div className="w-full text-start">
                      <span className="mogra-regular name-text md:text-4xl text-xl">
                        @SharedLocalizer["AmuseBouche"]
                      </span>
                    </div>
                    <div className="w-full">
                      <img
                        src="~/Menu/@Menu.AmuseBoucheImage"
                        className="w-full h-auto"
                        alt=""
                      />
                    </div>
                    <div className="w-full text-start">
                      <p className="Interl md:text-l text-lg font-medium">
                        @Html.Raw(Menu.AmuseBoucheDec.Replace("\n", "<br />
                        "))
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                    <div className="w-full text-start">
                      <span className="mogra-regular name-text md:text-4xl text-xl	">
                        @SharedLocalizer["Dessert"]
                      </span>
                    </div>
                    <div className="w-full">
                      @if (Menu.DessertImage == "Object reference not set to an
                      instance of an object.")
                      {<img className="w-full h-auto" alt="" />}
                      else
                      {
                        <img
                          src="~/Menu/@Menu.DessertImage"
                          className="w-full h-auto"
                          alt=""
                        />
                      }
                    </div>

                    <div className="w-full text-start">
                      <p className="Interl md:text-xl text-lg font-medium ">
                        @Html.Raw(Menu.DessertDec.Replace("\n", "<br />
                        "))
                      </p>
                    </div>
                  </div>

                  {/* Add other menu items similarly */}

                  <div className="flex flex-col items-center justify-center w-full md:mt-28 md:mb-14 mt-20 mb-5 z-30">
                    {/* <label className="cairo font-semibold md:text-[32px] text-[16px] my-3">
                    Total Number Of Invitation
                  </label>
                  <input
                    asp-for="NumberOfInvitation"
                    type="number"
                    name="NumberOfInvitation"
                    className="bg-[#D9D9D933] md:w-1/3 w-2/3 md:h-[78px] h-[40px] rounded-none p-3"
                    min="1"
                  /> */}
                    <div className="flex items-center justify-center gap-5  z-30 my-5">
                      <button
                        type="submit"
                        className="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#FA8836] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836]   "
                      >
                        Accept
                      </button>
                      <button className="md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#6555FF] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px] border-[3px] border-[#7163FF59] drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default InvitationCardPage;
