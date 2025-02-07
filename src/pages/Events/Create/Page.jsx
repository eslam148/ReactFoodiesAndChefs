import { useEffect, useState } from "react";
import EventsForm from "../../../components/EventsForm/Component";

function CreateEventsPage() {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent({
      hours: 0,
      minutes: 0,
      minGuests: 1,
      maxGuests: 2,
    });
  }, []);

  return (
    <div>
      <EventsForm isNewEvent={true} event={event} setEvent={setEvent} />
    </div>
  );
}

export default CreateEventsPage;
