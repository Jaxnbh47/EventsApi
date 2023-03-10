import { useState } from "react";
import { GetEventDetails } from "../services/EventsServices";
import { Header } from "./Header";

export function Homepage() {
    const [events, setEvents] = useState<Event[]>([])
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');

    // const onSubmit = () => {
    //     console.log(startDate);
    //     GetEventDetails({startDate,endDate,postalCode,keyword}).then((events) => {
    //         setEvents(events);
    //     })
    // }

    return (
        <div className="Homepage">
            <Header />
            <form className="form-container">
                 <label>
                     Keyword:    
                 <input type="text" name="keyword" placeholder="Enter event name" value={keyword}
                onChange={(e) => setKeyword(e.target.value)} />
                </label>
                
                
                    <label>
                     Postal Code:
                 <input type="text" name="postalCode"  placeholder="Enter postal code" value={postalCode}
                onChange={(e) => setPostalCode(e.target.value.replace(/[^\d{5}]$/, "").substr(0, 5))} />
                </label>
                  
                <label>
                     Start Date:
                 <input type="date" name="startDate" value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
                </label>
                  
                    <label>
                     End Date:
                 <input type="date" name="endDate" value={endDate}
                onChange={(e) => setEndDate(e.target.value)} />
                </label>
                    {/* <input className="submit" type="submit" value="Submit" onClick={() => onSubmit()} /> */}
            </form>
        </div>
        
    )
}