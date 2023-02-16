import axios from 'axios';
import { Event } from '../services/EventsServices';

export function GetEvents(reqData:{startDate:string}) : Promise<Event[]> {
    return axios.get<Event[]>(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40&startDateTime=${reqData.startDate}`)
        .then(response => response.data);
}

