import axios from 'axios';

export function GetEventDetails(reqData:{startDate:string,endDate:string,keyword:string,postalCode:string}) : Promise<Event[]> {
    return axios.get<Event[]>(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40&keyword=${reqData.keyword}&postalCode=${reqData.postalCode}&startDateTime=${reqData.startDate}&endDateTime=${reqData.endDate}`)
    .then(response => response.data);
}
