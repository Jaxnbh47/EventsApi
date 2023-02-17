import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventDetails } from './components/EventDetails';
import { EventType } from '@testing-library/react';
import { Accessibility, Image, Classification, Dates, EventLinks, Locale, Outlet, PriceRange, Product, Promoter, Sales, Seatmap, TicketLimit, AgeRestrictions, Ticketing, EventEmbedded } from './services/EventsServices';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');
</style>


export interface Event {
    name:             string;
    type:             EventType;
    id:               string;
    test:             boolean;
    url:              string;
    locale:           Locale;
    images:           Image[];
    sales:            Sales;
    dates:            Dates;
    classifications:  Classification[];
    promoter?:        Promoter;
    promoters?:       Promoter[];
    info?:            string;
    pleaseNote?:      string;
    priceRanges?:     PriceRange[];
    products?:        Product[];
    seatmap:          Seatmap;
    accessibility?:   Accessibility;
    ticketLimit?:     TicketLimit;
    ageRestrictions?: AgeRestrictions;
    ticketing?:       Ticketing;
    _links:           EventLinks;
    _embedded:        EventEmbedded;
    outlets?:         Outlet[];
}

function App() {

const [events, setEvents] = useState<Event[]>([]);


useEffect(() => {
fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40")
.then(res => res.json())
.then(
(result) => {
    console.log(result.properties.events);
    setEvents(result.properties.events);
},
)
}, [events])

return (
<div className="App">
{events.map((event, idx) => (
        /* @ts-ignore */
        <EventDetails events={event} key={idx}></EventDetails>
    ))}
</div>
);
}




// function App() {
//   return (
//     <div className="App">
//       <Homepage />

//       {event.map((events, idx) => (
//         /* @ts-ignore */
//         <EventDetails events={event} key={idx}></EventDetails>
//     ))}
//     </div>
//   );
// }

export default App;
