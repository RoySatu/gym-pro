import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:8082/auth';

  // constructor(private http: HttpClient) {}

  // getUserByEmail(email: string) {
  //   return this.http.get(`${this.apiUrl}/getbyId/${email}`);
  // }
  private apiUrl = baseUrl+'/auth'; // Update with your actual API endpoint

  constructor(private http: HttpClient) {}

  getuserById(email: string): Observable<any> {
    const url = `${this.apiUrl}/getbyId/${email}`;
    return this.http.get<any>(url);
  }

  getAdminbyId(email: string): Observable<any> {
    const url = `${this.apiUrl}/getAdminbyId/${email}`;
    return this.http.get<any>(url);
  }
}
