import { useParams } from "react-router-dom";
import EventsForm from "../../../components/EventsForm/Component";
import { useState } from "react";

function EditEventsPage() {
  const { eventId } = useParams();

  const [event, setEvent] = useState({
    id: eventId,
    name: "Event Name",
    description: "Event Description",
    date: "2021-12-31",
    time: "12:00",
    location: "Cairo Festival City",
    hours: 2,
    minutes: 30,
    minGuests: 10,
    maxGuests: 50,
  });

  return (
    <div>
      <EventsForm isNewEvent={false} event={event} setEvent={setEvent} />
    </div>
  );
}

export default EditEventsPage;
