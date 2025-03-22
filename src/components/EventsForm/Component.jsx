import DishImg from "../../assets/images/dish.webp";
import ArrowUpSVG from "../../assets/images/ArrowUp.svg";
import ArrowDownSVG from "../../assets/images/ArrowDown.svg";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { useEffect, useState } from "react";
import {
  convertTime24HTo12H,
  convertTime24HToIso,
} from "../../utils/convertTimeFormat";
import {
  createEventService,
  updateEventService,
} from "../../services/events/events";
import checkSignIn from "../../utils/checkSignIn";
import MapModel from '../LocationMap/MapMode'

function EventsForm({ isNewEvent, event, setEvent }) {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0]; // Converts to yyyy-mm-dd format
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    checkSignIn();
  });
  useEffect(() => {
   },[selectedLocation]);
  useEffect(() => {
    const calculateEndTime = (date, startTime, hours, minutes) => {
      if (!date || !startTime || !hours) {
        return null; // Handle missing inputs appropriately
      }

      // Parse the date and startTime into a single Date object
      const [startHours, startMinutes] = startTime.split(":").map(Number); // Extract hours and minutes from startTime
      const startDate = new Date(date); // Create a Date object from the provided date
      startDate.setHours(startHours, startMinutes, 0, 0); // Set the time part to startHours and startMinutes

      // Add the given hours and minutes
      startDate.setHours(startDate.getHours() + hours);
      startDate.setMinutes(startDate.getMinutes() + minutes);

      // Return the updated time in "HH:mm" format
      const endHours = String(startDate.getHours()).padStart(2, "0");
      const endMinutes = String(startDate.getMinutes()).padStart(2, "0");
      return `${endHours}:${endMinutes}`;
    };

    if (event) {
      setEndTime(
        calculateEndTime(
          event.date,
          event.startTime,
          event.hours,
          event.minutes
        )
      );
    }
  }, [event]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (event.minNumberOfInvetation > event.maxNumberOfInvetation) {
        setError("Maximum number of invites should be bigger than minimum.");
        return;
      }

      const eventToSubmit = {
        ...event,
        date: new Date(event.date).toISOString(),
        startTime: convertTime24HToIso(event.date, event.startTime),
        endTime: convertTime24HToIso(event.date, endTime),
        latitude:selectedLocation[0],
        longitude:selectedLocation[1]

      };
      console.log(eventToSubmit)
      if (isNewEvent) {
        const res = await createEventService(eventToSubmit);

        if (res && res.success) {
          // Redirect to the events page
          window.location.href = `/events/${res.data.id}`;
        }
      } else {
        const res = await updateEventService(eventToSubmit);

        if (res && res.success) {
          // Redirect to the events page
          window.location.href = `/events/${res.data.eventId}`;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainbg overflow-auto min-h-screen pt-4">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0 " id="overlay">
        <section className="CreateEventpgMobile w-full  md:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-20  ">
          <form dir="auto" onSubmit={handleSubmit}>
            <div className="mb-1">
              <label
                htmlFor="event-name"
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
                value={event?.eventName}
                onChange={(e) =>
                  setEvent({ ...event, eventName: e.target.value })
                }
              />
            </div>
            <div className="mb-1">
              <label htmlFor="event-Description" className="section-title">
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
                value={event?.eventDescription}
                onChange={(e) =>
                  setEvent({ ...event, eventDescription: e.target.value })
                }
              />
            </div>
            <div className="flex md:flex-row flex-col gap-4 mb-1">
              <div className="flex md:w-2/3 w-full">
                <div className="flex flex-col w-1/2 rtl:ml-4 ltr:mr-4">
                  <label
                    htmlFor="event-date"
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
                  <label htmlFor="event-time" className="section-title">
                    {t("events.form.time")}
                  </label>
                  <input
                    name="StartTime"
                    type="time"
                    id="event-time"
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 form-control w-full text-sm custom-date-icon"
                    required
                    value={event?.startTime}
                    onChange={(e) =>
                      setEvent({ ...event, startTime: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-2  gap-x-4 gap-y-0 md:w-1/3 w-full">
                <div className="flex flex-col w-full relative">
                  <label htmlFor="hours" className="section-title">
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
                          setEvent({
                            ...event,
                            hours: Number(event.hours) + 1,
                          });
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
                  <label htmlFor="minutes" className="section-title">
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
                          setEvent({
                            ...event,
                            minutes: Number(event.minutes + 1),
                          });
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
                event.startTime &&
                (event.hours || event.minutes) &&
                `This event will take place on ${
                  event.date
                }, From ${convertTime24HTo12H(
                  event.startTime
                )} until ${convertTime24HTo12H(endTime)}.`) ||
                "Select a date and time."}
            </p>
            <div className="flex md:flex-row flex-col mb-5 h-20 space-y-4 md:space-y-0 md:h-auto">
              <div className="flex justify-start items-center text-start md:w-1/3 w-full mb-2 md:mb-0">
                <label
                  htmlFor="event-invitees"
                  className="section-title rtl:text-right ltr:text-left"
                >
                  {t("events.form.noGuests")}
                </label>
              </div>

              <div className="flex md:w-2/3 w-full space-x-4 rtl:space-x-reverse">
                {/* Minimum Input */}
                <div className="relative w-1/2 rtl:text-right ltr:text-left">
                  <label
                    htmlFor="Minimum"
                    className="section-title rtl:text-right ltr:text-left"
                  >
                    {t("events.form.minimum")}
                  </label>
                  <input
                    name="MinNumberOfInvetation"
                    step="1"
                    type="number"
                    id="Minimum"
                    placeholder="Minimum Guests"
                    min={1}
                    className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-3 text-sm form-control w-full"
                    required
                    value={event?.minNumberOfInvetation}
                    onChange={(e) => {
                      if (e.target.value < 0) e.target.value = 0;
                      setEvent({
                        ...event,
                        minNumberOfInvetation: e.target.value,
                      });
                    }}
                  />

                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() => {
                        if (event.minNumberOfInvetation < 1) {
                          setEvent({ ...event, minNumberOfInvetation: 1 });
                        } else {
                          setEvent({
                            ...event,
                            minNumberOfInvetation:
                              event.minNumberOfInvetation + 1,
                            maxNumberOfInvetation: Math.max(
                              event.minNumberOfInvetation + 1,
                              event.maxNumberOfInvetation
                            ),
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
                        if (event.minNumberOfInvetation > 1) {
                          setEvent({
                            ...event,
                            minNumberOfInvetation:
                              event.minNumberOfInvetation - 1,
                          });
                        } else {
                          setEvent({ ...event, maxNumberOfInvetation: 1 });
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
                    htmlFor="Maximum"
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
                    placeholder="Maximum Guests"
                    value={event?.maxNumberOfInvetation}
                    onChange={(e) => {
                      if (e.target.value < 0) e.target.value = 0;
                      setEvent({
                        ...event,
                        maxNumberOfInvetation: e.target.value,
                      });
                    }}
                  />
                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick={() =>
                        setEvent({
                          ...event,
                          maxNumberOfInvetation:
                            event.maxNumberOfInvetation + 1 || 2,
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
                          maxNumberOfInvetation:
                            event.maxNumberOfInvetation - 1 || 1,
                          minNumberOfInvetation: Math.min(
                            event.minNumberOfInvetation,
                            event.maxNumberOfInvetation - 1 || 1
                          ),
                        })
                      }
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-1 mt-12" dir="auto">
              {/* Label for the location input */}
              <label
                htmlFor="event-location"
                className="section-title rtl:text-right ltr:text-left"
              >
                {t("events.form.location")}
              </label>

              {/* General Location input field */}
              <input
                name="GeneralLocation"
                type="text"
                id="event-location"
                className="opacity-90 placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full p-3 rtl:text-right ltr:text-left"
                placeholder={t("events.form.locationPlaceholder")}
                value={event?.generalLocation}
                onChange={(e) =>
                  setEvent({ ...event, generalLocation: e.target.value })
                }
              />

              {/* Button to open the map and set location */}
              <div className="absolute top-2 flex flex-col items-center justify-center pr-3 pt-6 rtl:left-2 ltr:right-0 rtl:right-auto ltr:left-auto">
                <button
                  onClick={()=>setIsModalOpen(true)}
                  style={{ borderRadius: "10px" }}
                  type="button"
                  className="p-2 leading-3 bg-[#242424] text-xs lato-bold font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none"
                >
                  {t("events.form.setYourLocation")}
                </button>
              </div>
            </div>

            {/* New Google Maps Location Picker */}
            {/* <LocationPicker /> */}

            {/* Show Error on submit */}

            <div
              className="text-red-500 font-bold mt-12 text-center"
              id="error"
            >
              {error}
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
          <MapModel
        setSelectedLocation={setSelectedLocation}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
        </section>
        <section className="w-5/12 hidden md:flex justify-center ltr:border-l rtl: border-r border-main-color">
          <img
            src={DishImg}
            className="w-[32rem] h-[38rem] object-cover"
            alt="DishImg"
          />
        </section>

      </main>
    </div>
  );
}

export default EventsForm;
