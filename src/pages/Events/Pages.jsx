import { useEffect, useState } from "react";
import DishImg2 from "../../assets/images/dish.webp";
import { useTranslation } from "react-i18next";
import { getAllEventsService } from "../../services/events/events";
import checkSignIn from "../../utils/checkSignIn";
import LoadingSpinner from "../../components/Spinner/Component";

function EventsPage() {
  const { t } = useTranslation();

  const [events, setEvents] = useState([]);
  const [isEventsLoading, setIsEventsLoading] = useState(false);

  useEffect(() => {
    checkSignIn();
  });

  useEffect(() => {
    const getAllEvents = async () => {
      setIsEventsLoading(true);

      try {
        const res = await getAllEventsService(1, 10);

        if (res && res.success) {
          console.log(res);

          setEvents(res.data.data);
        }
      } catch (err) {
        console.log("Error in getting all events");
        console.log(err);
      }

      setIsEventsLoading(false);
    };

    getAllEvents();
  }, []);

  return (
    <main
      className="mainbg min-h-[80dvh] md:flex md:gap-10 mt-0 p-0"
      id="overlay"
    >
      {/* <Sidebar */}
      <section className="min-h-screen space-y-6 md:min-h-full flex flex-col w-full  md:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans ">
        <div className="w-full flex flex-col justify-center items-center ">
          <h2 className="zeyada-regular text-main-color md:text-7xl text-5xl text-center">
            {t("global.showcaseYourTalent")}
          </h2>
          <h2 className="plus-jakarta-sans md:text-4xl text-2xl text-center">
            {t("events.subtitle")}
          </h2>
        </div>
        <div className="w-full flex justify-center items-center mb-6 mt-0">
          <a
            className="text-white text-center font-bold text-xl plus-jakarta-sans w-2/6 bg-main-color h-[53px] flex justify-center items-center mb-2 hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent  hover:border-[3px] hover:border-main-color hover:text-main-color rounded-[16px]"
            href="/events/create"
          >
            {t("events.addEvent")}
          </a>
        </div>
        {events && events.length <= 0 ? (
          <>
            {isEventsLoading ? (
              <div className="flex justify-center items-center">
                <LoadingSpinner />
              </div>
            ) : (
              <div>
                <h2 className="text-white md:text-4xl text-s my-20 font-bold text-center">
                  You Don't have any Events yet.
                </h2>
              </div>
            )}
          </>
        ) : (
          <>
            {events.map((event, ind) => (
              <div
                className="bg-main-color h-[53px] flex justify-between w-full items-center p-6 "
                style={{ borderRadius: "16px" }}
                key={ind}
              >
                <div className="font-bold text-xl md:w-full flex justify-between gap-0 md:gap-2 flex-col md:flex-row me-4">
                  <span className="font-bold md:text-[18px] text-[14px]">
                    {event.eventName}
                  </span>
                  <span className="date font-bold	md:text-[18px] text-[12px]">
                    {event.date ? event.date.split("T")[0] : ""}
                  </span>
                </div>
                <div
                  className="flex text-center justify-end gap-2 md:w-3/12"
                  dir="auto"
                >
                  <a
                    className="md:h-[35px] h-[24px] md:w-[85px] w-[44px] bg-white text-main-color p-0.5 md:p-0 my-auto  border-[3px] border-white   font-bold md:text-[18px] text-[10px]  hover:bg-[#000000]  hover:border-[3px] hover:border-[#000000] rounded-[40px]	"
                    href={`/events/edit/${event.eventId}`}
                  >
                    {t("global.edit")}
                  </a>
                  <a
                    className=" md:h-[35px] h-[24px] md:w-[85px] w-[44px]  bg-white text-main-color p-0.5 md:p-0 my-auto  border-[3px] border-white     font-bold md:text-[18px] text-[10px] 	 hover:bg-[#000000]   hover:border-[3px] hover:border-[#000000] rounded-[40px]"
                    href={`/events/${event.eventId}`}
                  >
                    {t("global.show")}
                  </a>
                </div>
              </div>
            ))}
          </>
        )}
        <div className="flex justify-center mt-6 gap-2">
          <button
            disabled
            className="bg-white text-black font-semibold px-3 py-3 rounded-md"
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
            className="bg-orange-500 text-white font-semibold px-3 py-1 rounded-md"
            href="/Home/GetMyEvents?page=1"
          >
            1
          </a>

          <button
            disabled
            className="bg-white text-black font-semibold px-3 py-3 rounded-md"
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
          </button>
        </div>
      </section>
      <section className="w-5/12 hidden md:flex justify-end ltr:border-l rtl: border-r border-main-color">
        <img
          src={DishImg2}
          className="w-[32rem] h-[38rem] object-cover"
          alt="FoodImage"
        />
      </section>
    </main>
  );
}

export default EventsPage;
