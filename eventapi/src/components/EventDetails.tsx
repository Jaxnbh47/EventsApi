import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetEvents } from "../model/Events";
import { GetEventDetails } from "../services/EventsServices";
import { Event } from "../model/Events";

export function EventDetailsProps() {
    const [event, setEvent] = useState<GetEvents>();
    const [eventUrl, setEventUrl] = useState("");
    const [info, setInfo] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [venue, setVenue] = useState("");
    const [image, setImage] = useState("");

 
    // useEffect(() => {
    //     //call our api
    //     GetEventDetails(id).then((data) => {console.log(data);});
    // }, [setEvent]);


    // return (
    //     <div className="EventDetails">
    //         <h2 className="EventName"></h2>
    //         <h3 className="venue">Venue: {venue}</h3>
    //     </div>
    // )
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