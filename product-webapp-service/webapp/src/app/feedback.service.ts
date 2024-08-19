import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = baseUrl+'/api/feedback'; 

  constructor(private http: HttpClient) {}

 
  getFeedbackData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.feedbackUrl}/getall`);
  }

  
  addFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(`${this.feedbackUrl}/add`, feedback);
  }
}
