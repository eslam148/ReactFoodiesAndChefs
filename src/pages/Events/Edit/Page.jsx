/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import EventsForm from "../../../components/EventsForm/Component";
import { useEffect, useState } from "react";
import { getEventByEventIdService } from "../../../services/events/events";
import { getHoursAndMinutesDifference } from "../../../utils/convertTimeFormat";

function EditEventsPage() {
  const { eventId } = useParams();

  const [event, setEvent] = useState();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await getEventByEventIdService(eventId);

      if (res && res.success) {
        const { hours, minutes } = getHoursAndMinutesDifference(
          res.data.startTime,
          res.data.endTime
        );
        setEvent({
          ...res.data,
          date: res.data.date.split("T")[0],
          startTime: res.data.startTime.split("T")[1],
          hours,
          minutes,
        });
      }
    };

    fetchEvent();
  }, []);

  return (
    <div>
      <EventsForm isNewEvent={false} event={event} setEvent={setEvent} />
    </div>
  );
}

export default EditEventsPage;
