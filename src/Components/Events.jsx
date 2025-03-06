import { useState, useEffect } from "react";
import Event from "./Event";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useEventStore from "../stores/useEventStore";
import FavoriteEvents from "./FavoriteEvents";
function Events() {
  const [showalert, setShowAlert] = useState(false);
  const {events, fetchEvents , deleteEvent} = useEventStore();
  const navigate = useNavigate();
  const handleDelete = async (eventId) => {
  
    deleteEvent(eventId);
    
  };

  useEffect(() => {
    fetchEvents();
    console.log(events) ; 
  }, []);

  
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
      {  <FavoriteEvents /> }
    </>
  );
}

export default Events;
