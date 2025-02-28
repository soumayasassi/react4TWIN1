import { useState, useEffect } from "react";
import events from "../data/events.json";
import Event from "./Event";
import { Alert } from "react-bootstrap";
import { deleteEvent, getallEvents } from "../service/api";
import { useNavigate } from "react-router-dom";
function Events() {
  const [showalert, setShowAlert] = useState(false);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const handleDelete = async (eventId) => {
   const res =  await deleteEvent(eventId);

    setEvents(events.filter((eventItem) => eventItem.id !== eventId));
    if (res.status === 200) {
      navigate("/events/list");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getallEvents();
    console.log(response.data);
    setEvents(response.data);
  };
  const showAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      {showalert && <Alert> You have booked an event</Alert>}
      {events.map((e, i) => (
        <Event
          event={e}
          key={i}
          showalert={showAlert}
          onDelete={handleDelete}
        ></Event>
      ))}
    </>
  );
}

export default Events;
