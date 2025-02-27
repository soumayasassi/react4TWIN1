import { useState } from "react";
import { Link } from "react-router-dom";

function Event(props) {
  const [event, setEvent] = useState(props.event);
  const showAlert = props.showalert;
  const [msg, setMsg] = useState("like");
  const change = () => {
    msg === "like" ? setMsg("dislike") : setMsg("like");
  };
  const update = () => {
    setEvent({
      ...event,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1,
    });
    showAlert();
  };

  return (
    <>
      <div className="max-w-sm p-6 text-left bg-white border border-gray-200 rounded-lg shadow">
        <img
          src={`/images/${event.nbTickets == 0 ? "sold_out.png" : event.img}`}
          style={{ width: "250px", height: "250px" }}
          alt="Event"
        />
        <div className="px-6 py-4">
        <p className="text-gray-700 text-base"><Link to={`/events/details/${event.id}`}>{event.name}</Link> </p>
          <p className="text-gray-700 text-base">Price: {event.price}</p>
          <div className="pt-4 pb-2">
            <p>Number of tickets: {event.nbTickets}</p>
            <p>Number of Participants: {event.nbParticipants}</p>

            <button
              className="btn btn-primary mt-4"
              onClick={update}
              disabled={event.nbTickets ? false : true}
            >
              {" "}
              Book an event
            </button>
            <button className="btn btn-primary mt-4" onClick={change}>
              {msg}
            </button>

            <button  className="btn btn-success mt-4"  >
            <Link
              to={`/events/update/${event.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </Link>
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
