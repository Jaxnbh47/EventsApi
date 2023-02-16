import { useState } from "react";
import { GetEvents } from "../models/Events";
import { Event } from "../services/EventsServices";
import { Header } from "./Header";

export function Homepage() {
    const [events, setEvents] = useState<Event[]>([])
    const [startDate, setStartDate] = useState<string>('');

    const onSubmit = () => {
        console.log(startDate);
        GetEvents({startDate}).then((events) => {
            setEvents(events);
        })
    }


    return (
        <div className="Homepage">
            <form>
                <label>
                     Start Date:
                 <input type="date" name="startDate" value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
                </label>
                    <input type="submit" value="Submit" onClick={() => onSubmit()} />
            </form>
        </div>
        
    )
}