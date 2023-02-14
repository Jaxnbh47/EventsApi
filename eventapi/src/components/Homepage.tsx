import { useState } from "react";
import { Event } from "../services/EventsServices";
import { Header } from "./Header";

export function Homepage() {
    const [events, setEvents] = useState<Event[]>([])

    return (
        <div className="Homepage">
            {/*Add form and button here*/}
        </div>
        
    )
}