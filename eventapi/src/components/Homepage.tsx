import { useState } from "react";
import { Event } from "../services/EventsServices";

export function Homepage() {
    const [events, setEvents] = useState<Event[]>([])

    return (
        <div className="Homepage">
            <button>Events Finder</button>
        </div>
        
    )
}