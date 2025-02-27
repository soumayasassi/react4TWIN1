import { useState  , useEffect} from "react";
import events from "../data/events.json"
import Event from "./Event";
import { Alert } from "react-bootstrap";
import {getallEvents} from "../service/api" ; 
function Events() {
    const [showalert, setShowAlert] = useState(false) ; 
    const [events , setEvents]  = useState([]) ; 

useEffect(() => {
    fetchData() ; 
}, [])


const fetchData  = async () => {
    const response  = await getallEvents() ; 
    console.log(response.data)
    setEvents(response.data) ; 
}
    const showAlert = () => 
    { setShowAlert(true)
setTimeout(() => {
    setShowAlert(false)
}, 2000);

    }

    return ( <> 
    {showalert && <Alert> You have booked an event</Alert>}
    {events.map((e,i) => <Event event={e} key={i} showalert={showAlert}></Event>)}
     </> );
}

export default Events;