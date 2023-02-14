import axios from 'axios';
import { EventsServices } from '../services/EventsServices';

export function GetEvents() : Promise<EventsServices> {
    return axios.get<EventsServices>('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40')
        .then(response => response.data);
}