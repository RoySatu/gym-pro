import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserchatService {
  baseurl = baseUrl;

  constructor(private http: HttpClient) { }

  getUser(){
    const queryParams = sessionStorage.getItem('username');
    return this.http.get(this.baseurl + `/user/${queryParams}`)
  }

  getAllUserNames(): Observable<string[]> {
    return this.http.get<string[]>(this.baseurl + '/user/getallnames'); // Replace with your backend API URL for all user names
  }
}

