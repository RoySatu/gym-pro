import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseurl';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private baseUrl = baseUrl + '/api/gym/trainers';
  
  constructor(private http: HttpClient) {}

  getAllTrainers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

}
