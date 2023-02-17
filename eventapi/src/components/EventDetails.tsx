import { useState } from "react";
import { GetEvents } from "../services/EventsServices";
import { Event } from "../App";

export function EventDetailsProps() {
    const [event, setEvent] = useState<GetEvents>();
    const [eventName, setEventName] = useState("");
    const [eventUrl, setEventUrl] = useState("");
    const [info, setInfo] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [venue, setVenue] = useState("");
    const [image, setImage] = useState("");

    return (
        <div className="EventDetails">
            <h2>Event Name</h2>
        </div>
    )
}


export interface EventProps {
    event:Event,
}

export function EventDetails(props:EventProps) {

    return (
        <div className="eventDetails">
            <div> 
                {props.event.name}
            </div>
            <div> 
                {props.event.type}
            </div>
            <div> 
                {props.event.id}
            <div> 
                {props.event.url}
            </div>
            <div> 
                {props.event.locale}
            </div>
            <div> 
                {props.event.images.map((img, index)=> (<img src="{img}"></img>))}
            </div>
            <div> 
                {props.event.dates.startDate}
            </div>
            <div> 
                {props.event.dates.endDate}
            </div>
            </div>
        </div>
    )
}