import { useState } from "react";
import { GetEvents } from "../services/EventsServices";

export function EventDetails() {
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