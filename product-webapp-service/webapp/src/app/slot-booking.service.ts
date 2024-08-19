import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class SlotBookingService {
  url=baseUrl+"/api/slot-bookings/user/";

  url2 = baseUrl+"/api/Createslots/all";

  constructor(private http:HttpClient) { }

  user(email:string) {
    return this.http.get(this.url + email);
  }

  slot(){
    return this.http.get(this.url2);
  }
}
