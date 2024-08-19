import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = baseUrl+'/api/events';

  constructor(private http: HttpClient) {}

  createEvent(eventData: {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    eventDetails: string;
    registrationBeginsDate: string;
    registrationEndsDate: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/createevent`, eventData);
  }
}
