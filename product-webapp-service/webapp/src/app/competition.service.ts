import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  constructor(private http: HttpClient) { }

  getCompetitionData(emailId: string) {
    return this.http.get(baseUrl+`/api/participated-users/event/${emailId}`);
  }
}
