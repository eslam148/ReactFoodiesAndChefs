import DishImg from "../../assets/images/dish.webp";
import { useEffect, useState } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

function OffersPage() {
  const { t } = useTranslation();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers([
      {
        id: "1",
        name: "Graduation Event",
        costPerGuest: "800",
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <main
      className="offers-page min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 plus-jakarta-sans"
      id="overlay"
    >
      <section className="min-h-screen mainbg relative   space-y-6 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
        <img
          src={DishImg}
          alt="Background"
          className="hidden md:block absolute inset-0 m-auto h-full object-cover z-0 opacity-40"
        />

        <form
          method="get"
          action="/GetMyInvitation"
          className="w-full flex md:flex-row flex-col justify-center md:space-y-0 space-y-5"
        >
          <div className="relative flex flex-col  md:w-1/4 w-full  items-center">
            <lable className="section-title font-medium self-start md:self-start lg:self-start text-start p">
              {t("offers.status")}
            </lable>

            <select
              name="status"
              className="text-xs	 md:text-xl appearance-none    w-full px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-[#FFFFFF4D]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
            >
              <option
                value="all"
                className=" checked:bg-orange-100 bg-white text-black "
              >
                - {t("offers.statusType.all")} -
              </option>

              <option
                value="accepted"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("offers.statusType.confirmed")}
              </option>

              <option
                value="declined"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("offers.statusType.declined")}
              </option>

              <option
                value="draft"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("offers.statusType.draft")}
              </option>

              <option
                value="pending"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("offers.statusType.pending")}
              </option>
            </select>
            <div className="absolute top-7 ltr:right-2 rtl:left-2 md:ltr:right-[2%] md:rtl:left-[2%] flex items-center px-2 pointer-events-none">
              <i className="text-2xl md:text-3xl fa-solid fa-caret-down"></i>
            </div>
          </div>
        </form>

        {!offers || offers?.length === 0 ? (
          <div className="text-center z-10">
            <div className="font-bold text-base md:text-2xl mt-5 plus-jakarta-sans">
              {t("offers.noOffers")}
            </div>
          </div>
        ) : (
          offers.map((offer) => (
            <div className="w-full overflow-x-auto z-10" key={offer.id}>
              <table className="w-full rounded-[5px] overflow-hidden table-auto">
                <thead className="bg-[#d89d7274] rounded-t-[5px]">
                  <tr className="grid md:grid-cols-4 grid-cols-4 gap-2 md:gap-2 my-5 text-center">
                    <th className="md:text-[22px] text-[0.5rem] w-full mx-3 text-start">
                      Event Name
                    </th>
                    <th className="md:text-xl text-[0.5rem] text-start">
                      Cost/Guest
                    </th>
                    <th className="md:text-xl text-[0.5rem]">Status</th>
                    <th className="md:text-xl text-[0.5rem]" />
                  </tr>
                </thead>
                <tbody className="bg-[#D9D9D926]">
                  <tr className="grid md:grid-cols-4 grid-cols-4 gap-2 md:gap-2 my-5 text-center">
                    <td className="text-start md:text-[22px] md:mx-3 mx-1 font-semibold text-[0.5rem] w-full">
                      {offer.name}
                    </td>
                    <td className="text-start md:text-[22px] font-semibold text-[0.5rem] w-full">
                      {offer.costPerGuest} EGP
                    </td>
                    <td className="w-full h-3/4 flex justify-center">
                      <span className="bg-[#848484] w-[65px] md:w-[145px] h-[20px] md:h-[36px] md:text-lg text-[0.5rem] text-center p-1 font-medium rounded-[15px]">
                        {offer.status}
                      </span>
                    </td>
                    <td className="w-full h-3/4 flex justify-center">
                      <a
                        className="text-white bg-main-color w-[50px] md:w-[113px] h-[20px] md:h-[36px] md:text-xl text-[0.5rem] text-center p-0 font-medium rounded-[15px]  hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent  hover:border-[3px] hover:border-main-color hover:text-main-color"
                        href={`/showOffer/${offer.id}`}
                      >
                        Show
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#D9D9D926] rounded-b-[5px]">
                  <tr>
                    <td colSpan="7">
                      <div className="flex justify-center mt-6 space-x-2 p-2 rounded-b-md">
                        <button
                          disabled
                          className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                        >
                          <svg
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
                          href="/Chef/GetMyOrders?page=1&amp;status=all"
                        >
                          1
                        </a>

                        <button
                          disabled
                          className="bg-white text-black font-semibold text-[10px] md:text-[16px] pt-1.5 md:pt-1  px-2  md:px-3 py-1 rounded-md"
                        >
                          <svg
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
                        </button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default OffersPage;
