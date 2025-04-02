import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventByEventIdService } from "../../services/events/events";
import { GetInvitationInfo } from "../../services/events/events";
import "./style.css";

const Invitation = () => {
  const [eventData, setEventData] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
      const getEvent = async () => {
          try {
              if (!id) return; // تأكيد أن id موجود
              const res = await GetInvitationInfo(id);
              console.log(res.data)
              setEventData(res.data);
          } catch (error) {
              console.error("Error fetching event:", error);
          }
      };
      getEvent();
  }, [id]);

  if (!eventData) {
      return <p className="text-center text-white text-2xl">Loading...</p>;
  }

  return (
    <main className="Inv-bg min-h-[80vh] flex flex-col">
      {/* القسم الأول */}
      <div className="bg-black w-[90%] m-auto rounded-lg p-16 flex flex-col text-white my-10">
        <h2 className="uppercase text-[36px]">{eventData.eventName}</h2>
        <p>{eventData.eventDescription}</p>
      </div>

      {/* تفاصيل الحدث */}
      <div className="bg-black w-[90%] m-auto rounded-lg p-5 flex flex-wrap text-white my-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2 space-y-4 ps-20 pt-4">
          <h2 className="text-4xl text-center w-full">{eventData.eventName}</h2>
          <p>Your Host: {eventData.host}</p>
          <p>{eventData.generalLocation}</p>
          <p>{eventData.maxNumberOfInvetation} Guests</p>
          <p>From {eventData.startTime} until {eventData.endTime}</p>
          <p>${eventData.price} Per person</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-5">
          <img
            className="object-cover rounded-2xl border-2 border-main-color w-full md:w-[300px]"
            src={eventData.chef.profileImageLink}
            alt="Event"
          />
        </div>
      </div>

      {/* قائمة الشيف */}
      <div className="bg-black w-[90%] m-auto rounded-lg p-5 flex flex-wrap text-white my-10 flex flex-col">
        <div className="items-center justify-center text-center md:items-start md:text-left w-full md:w-1/2 space-y-4">
          <h2 className="text-center">Chef’s Menu</h2>
          <h3 className="text-center">Chef: {eventData.chef.firstName}{eventData.chef?.lastName}</h3>
        </div>
        <div className="w-full flex justify-between p-5">
          <p>
            <h2>DishName</h2>
            <h4>DishName</h4>
          </p>
          <img
            className="object-cover rounded-2xl border-2 border-main-color w-full md:w-[200px]"
            src={eventData.chef.profileImageLink}
            alt="Chef"
          />
        </div>
      </div>

      {/* نموذج الحجز */}
      <form
        className="min-h-fit flex flex-col items-center justify-center bg-[#000000D9] w-full p-5"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <div className="w-full flex flex-col items-center">
          <label className="font-semibold text-lg text-orange-500 my-3">
            Number of Invitations:
          </label>
          <input
            type="number"
            name="NumberOfInvitation"
            className="bg-[#D9D9D933] w-2/3 md:w-1/3 h-12 rounded p-3 text-white"
            min="1"
            max="100"
            required
          />
          <div className="flex gap-5">
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-6 rounded-lg mt-5 hover:bg-orange-600 transition"
            >
              Accept
            </button>
            <button
              type="button"
              className="bg-[#6555FF] text-white py-2 px-6 rounded-lg mt-5 hover:bg-orange-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-6 rounded-lg mt-5 hover:bg-orange-600 transition"
            >
              Decline
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Invitation;
