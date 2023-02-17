import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetEvents } from "../model/Events";
import { GetEventDetails } from "../services/EventsServices";

interface Params {
    id: any;
}
export function EventDetails() {
    const [event, setEvent] = useState<GetEvents>();
    const [eventUrl, setEventUrl] = useState("");
    const [info, setInfo] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [venue, setVenue] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams<Params>();
 
    useEffect(() => {
        //call our api
        GetEventDetails(id).then((data) => {console.log(data);});
    }, [setEvent]);


    return (
        <div className="EventDetails">
            <h2 className="EventName"></h2>
            <h3 className="venue">Venue: {venue}</h3>
        </div>
    )
}