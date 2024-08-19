import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseurl';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = baseUrl+'/api/feedback/add'; 
  private baseUrl=baseUrl+'/api/feedback';

  constructor(private http: HttpClient) {}

  addFeedback(feedback: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(this.apiUrl, feedback, httpOptions);
  }

   getFeedbackByEmail(emailId: string) {
    return this.http.get(`${this.baseUrl}/get/${emailId}`);
  }
}



