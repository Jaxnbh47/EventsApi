import { useState } from "react";
import { Events } from "../services/EventsServices";

export function Homepage() {
    const [events, setEvents] = useState<Events[]>([])

    return (
        <div className="Homepage">
            <h1>Events Finder </h1>
        </div>

    )
}