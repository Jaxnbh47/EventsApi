import axios from 'axios';
import { Events } from '../services/EventsServices';

export function GetEvents() : Promise<Events> {
    return axios.get<Events>('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40')
        .then(response => response.data);
}

