import { useState } from "react";
import { Event } from "../services/EventsServices";

export function Homepage() {
    const [events, setEvents] = useState<Event[]>([])

    return (
        <div className="Homepage">
            <h1>Events Finder</h1>
            {/*Add form and button here*/}
        </div>
        
    )
}