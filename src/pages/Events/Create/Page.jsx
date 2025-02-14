import { useEffect, useState } from "react";
import EventsForm from "../../../components/EventsForm/Component";

function CreateEventsPage() {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent({
      hours: 0,
      minutes: 0,
      minNumberOfInvetation: 1,
      maxNumberOfInvetation: 2,
      latitude: 37.7749,
      longitude: -122.4194,
    });
  }, []);

  return (
    <div>
      <EventsForm isNewEvent={true} event={event} setEvent={setEvent} />
    </div>
  );
}

export default CreateEventsPage;
