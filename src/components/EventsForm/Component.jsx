import DishImg from "../../assets/images/dish.webp";
import ArrowUpSVG from "../../assets/images/ArrowUp.svg";
import ArrowDownSVG from "../../assets/images/ArrowDown.svg";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { useEffect, useState } from "react";
import convertTo12HourFormat from "../../utils/convertTo12HourFormat";

function EventsForm({ isNewEvent, event, setEvent }) {
  const { t } = useTranslation();

  const today = new Date();
  const todayDate = today.toISOString().split("T")[0]; // Converts to yyyy-mm-dd format
  const [eventEndTime, setEventEndTime] = useState("");

  useEffect(() => {
    console.log(event);
  }, [event]);

  useEffect(() => {
    const calculateNewTime = (startTime, hours, minutes) => {
      if (!startTime || hours === undefined || minutes === undefined) {
        return null; // Handle missing inputs appropriately
      }

      // Parse the starting time (24-hour format)
      const [startHour, startMinute] = startTime.split(":").map(Number);

      // Create a Date object with the starting time
      const eventDate = new Date();
      eventDate.setHours(startHour, startMinute, 0, 0); // Set hour and minute, reset seconds/milliseconds

      // Add the event duration
      eventDate.setHours(eventDate.getHours() + hours);
      eventDate.setMinutes(eventDate.getMinutes() + minutes);

      // Format the new time in 12-hour format with AM/PM
      const newHour = eventDate.getHours();
      const newMinutes = eventDate.getMinutes();
      const formattedHour = ((newHour + 11) % 12) + 1; // Convert 24-hour to 12-hour format
      const formattedMinutes = String(newMinutes).padStart(2, "0");
      const period = newHour >= 12 ? "PM" : "AM";

      return `${formattedHour}:${formattedMinutes} ${period}`;
    };

    if (event) {
      setEventEndTime(
        calculateNewTime(event?.time, event.hours, event.minutes)
      );
    }
  }, [event]);

  const openMapsPage = () => {
    window.open("/googleMap", "mapsWindow", "width=1000,height=800");
  };

  return (
    <div className="mainbg overflow-auto min-h-screen pt-4">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0 " id="overlay">
        <section className="CreateEventpgMobile w-full  md:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-20  ">
          <form dir="auto">
            <div className="mb-1">
              <label
                for="event-name"
                className="section-title lato-bold font-medium"
              >
                {t("events.form.name")}
              </label>

              <input
                name="EventName"
                type="text"
                maxLength="30"
                id="event-name"
                className="opacity-90 placeholder-gray-400 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full p-3 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                placeholder={t("events.form.namePlaceholder")}
                required
                value={event?.name}
                onChange={(e) => setEvent({ ...event, name: e.target.value })}
              />
              <span
                className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="EventName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="mb-1">
              <label for="event-Description" className="section-title">
                {t("events.form.description")}
              </label>
              <input
                name="EventDescription"
                maxLength="100"
                type="text"
                id="event-Description"
                className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full p-3"
                placeholder={t("events.form.descriptionPlaceholder")}
                required
                value={event?.description}
                onChange={(e) =>
                  setEvent({ ...event, description: e.target.value })
                }
              />
              <span
                className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="EventDescription"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex md:flex-row flex-col gap-4 mb-1">
              <div className="flex md:w-2/3 w-full">
                <div className="flex flex-col w-1/2 rtl:ml-4 ltr:mr-4">
                  <label
                    for="event-date"
                    className="section-title lato-bold font-medium"
                  >
                    {t("events.form.date")}
                  </label>
                  <input
                    name="Date"
                    type="date"
                    id="event-date"
                    className="opacity-90 placeholder-gray-400 text-white focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control w-full p-2 custom-date-icon"
                    required
                    min={todayDate}
                    value={event?.date}
                    onChange={(e) =>
                      setEvent({ ...event, date: e.target.value })
                    }
                  />
                </div>
                <div className="ms-1.5 md:ms-0 flex flex-col w-1/2">
                  <label for="event-time" className="section-title">
                    {t("events.form.time")}
                  </label>
                  <input
                    name="StartTime"
                    type="time"
                    min="13:40"
                    id="event-time"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 form-control w-full text-sm custom-date-icon"
                    required
                    value={event?.time}
                    onChange={(e) =>
                      setEvent({ ...event, time: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-2  gap-x-4 gap-y-0 md:w-1/3 w-full">
                <input
                  type="datetime"
                  className="hidden"
                  value=""
                  name="EndTime"
                  id="EndTime"
                  required
                />

                <div className="flex flex-col w-full relative">
                  <label for="hours" className="section-title">
                    {t("events.form.hours")}
                  </label>
                  <input
                    type="number"
                    id="hours"
                    name="Hours"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control p-2"
                    required
                    placeholder="0"
                    step="1"
                    value={event?.hours}
                    onChange={(e) => {
                      if (e.target.value < 0) e.target.value = 0;
                      if (e.target.value > 23) e.target.value = 23;
                      setEvent({ ...event, hours: e.target.value });
                    }}
                  />

                  {/* Increment and decrement buttons for hours input */}
                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:left-2 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() => {
                        if (event.hours < 23) {
                          setEvent({ ...event, hours: event.hours + 1 });
                        } else {
                          setEvent({ ...event, hours: 23 });
                        }
                      }}
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick={() => {
                        if (event.hours > 0) {
                          setEvent({ ...event, hours: event.hours - 1 });
                        } else {
                          setEvent({ ...event, hours: 0 });
                        }
                      }}
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col w-full relative rtl">
                  <label for="minutes" className="section-title">
                    {t("events.form.minutes")}
                  </label>
                  <input
                    type="number"
                    id="minutes"
                    name="Minutes"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control p-2"
                    required
                    placeholder="0"
                    min="0"
                    max="59"
                    value={event?.minutes}
                    onChange={(e) => {
                      if (e.target.value < 0) e.target.value = 0;
                      if (e.target.value > 59) e.target.value = 59;
                      setEvent({ ...event, minutes: e.target.value });
                    }}
                  />
                  {/* Increment and decrement buttons for minutes input */}
                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:left-2 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() => {
                        if (event.minutes < 59) {
                          setEvent({ ...event, minutes: event.minutes + 1 });
                        } else {
                          setEvent({ ...event, minutes: 59 });
                        }
                      }}
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick={() => {
                        if (event.minutes > 0) {
                          setEvent({ ...event, minutes: event.minutes - 1 });
                        } else {
                          setEvent({ ...event, minutes: 0 });
                        }
                      }}
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                <span
                  className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                  data-valmsg-for="EndTime"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>

            {/* TODO: need to make this dynamic */}
            <p
              id="duration-output"
              className="  lato-bold font-medium text-[#FFFFFF] text-[13px] md:text-[12px] my-5"
            >
              {/* This event will take place on 1/21/2025, From 01:40 PM until 01:40
              PM. */}
              {(event &&
                event.date &&
                event.time &&
                (event.hours || event.minutes) &&
                `This event will take place on ${
                  event.date
                }, From ${convertTo12HourFormat(
                  event.time
                )} until ${eventEndTime}.`) ||
                "Select a date and time."}
            </p>
            <div className="flex md:flex-row flex-col mb-5 h-20 space-y-4 md:space-y-0 md:h-auto">
              <div className="flex justify-start items-center text-start md:w-1/3 w-full mb-2 md:mb-0">
                <label
                  for="event-invitees"
                  className="section-title rtl:text-right ltr:text-left"
                >
                  {t("events.form.noGuests")}
                </label>
              </div>

              <div className="flex md:w-2/3 w-full space-x-4 rtl:space-x-reverse">
                {/* Minimum Input */}
                <div className="relative w-1/2 rtl:text-right ltr:text-left">
                  <label
                    for="Minimum"
                    className="section-title rtl:text-right ltr:text-left"
                  >
                    {t("events.form.minimum")}
                  </label>
                  <input
                    name="MinNumberOfInvetation"
                    step="1"
                    type="number"
                    id="Minimum"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-3 text-sm form-control w-full"
                    required
                    value={event?.minGuests || 1}
                    onChange={(e) => {
                      if (e.target.value < 1) e.target.value = 1;
                      setEvent({ ...event, minGuests: e.target.value });
                    }}
                  />
                  <span
                    className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="MinNumberOfInvetation"
                    data-valmsg-replace="true"
                  ></span>

                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() => {
                        if (event.minGuests < 1) {
                          setEvent({ ...event, minGuests: 1 });
                        } else {
                          setEvent({
                            ...event,
                            minGuests: event.minGuests + 1,
                          });
                        }
                      }}
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick={() => {
                        if (event.minGuests > 1) {
                          setEvent({
                            ...event,
                            minGuests: event.minGuests - 1,
                          });
                        } else {
                          setEvent({ ...event, minGuests: 1 });
                        }
                      }}
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                {/* Maximum Input */}
                <div className="relative w-1/2 rtl:text-right ltr:text-left">
                  <label
                    for="Maximum"
                    className="section-title rtl:text-right ltr:text-left"
                  >
                    {t("events.form.maximum")}
                  </label>
                  <input
                    name="MaxNumberOfInvetation"
                    id="Maximum"
                    type="number"
                    step="1"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-3 text-sm form-control w-full"
                    required
                    min="1"
                    value={event?.maxGuests || 1}
                    onChange={(e) => {
                      if (e.target.value < 1) e.target.value = 1;
                      setEvent({ ...event, maxGuests: e.target.value });
                    }}
                  />
                  <span
                    className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="MaxNumberOfInvetation"
                    data-valmsg-replace="true"
                  ></span>

                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() =>
                        setEvent({
                          ...event,
                          maxGuests: event.maxGuests + 1 || 2,
                        })
                      }
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick={() =>
                        setEvent({
                          ...event,
                          maxGuests: event.maxGuests - 1 || 1,
                        })
                      }
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-1" dir="auto">
              {/* Label for the location input */}
              <label
                for="event-location"
                className="section-title rtl:text-right ltr:text-left"
              >
                {t("events.form.location")}
              </label>

              {/* General Location input field */}
              <input
                value=""
                name="GeneralLocation"
                type="text"
                id="event-location"
                className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full p-3 rtl:text-right ltr:text-left"
                placeholder={t("events.form.locationPlaceholder")}
                data-val="true"
                data-val-required=" this field is required."
              />

              <span
                className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="GeneralLocation"
                data-valmsg-replace="true"
              ></span>

              {/* Button to open the map and set location */}
              <div className="absolute top-2 flex flex-col items-center justify-center pr-3 pt-6 rtl:left-2 ltr:right-0 rtl:right-auto ltr:left-auto">
                <button
                  onClick={openMapsPage}
                  style={{ borderRadius: "10px" }}
                  type="button"
                  className="p-2 leading-3 bg-[#242424] text-xs lato-bold font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none"
                >
                  {t("events.form.setYourLocation")}
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#6555FF] rounded-[35px]  w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]  "
              >
                {isNewEvent
                  ? t("events.form.createEvent")
                  : t("events.form.updateEvent")}
              </button>
            </div>
          </form>
        </section>
        <section className="w-5/12 hidden md:flex justify-center ltr:border-l rtl: border-r border-main-color">
          <img
            src={DishImg}
            className="w-[30rem] h-auto object-cover"
            alt="DishImg"
          />
        </section>
      </main>
    </div>
  );
}

export default EventsForm;
