import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {
  constructor(private http:HttpClient) { }
 private api1=baseUrl+"/auth/addUser";
  private api2=baseUrl+"/auth/addAdmin";
  postuser(data:any){
      return this.http.post(this.api1,data);  
    }   
  
    postadmin(data:any){
      return this.http.post(this.api2,data);
    }
  
}
