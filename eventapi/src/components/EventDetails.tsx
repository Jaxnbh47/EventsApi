import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetEvents } from "../model/Events";
import { GetEventDetails } from "../services/EventsServices";

export function EventDetails() {
    const [event, setEvent] = useState<GetEvents>();
    const [eventUrl, setEventUrl] = useState("");
    const [info, setInfo] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [venue, setVenue] = useState("");
    const [image, setImage] = useState("");

 
    useEffect(() => {
        GetEventDetails().then(data => setEvent(data));
       
      }, []);

      useEffect(() => {
        console.log(event)
      }, [event])

      function filterEvents(){

      }

      return (
        <div className='Events'>
            
       </div> 
      )
    }