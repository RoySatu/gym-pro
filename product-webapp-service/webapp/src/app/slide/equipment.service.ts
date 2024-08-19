import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseurl';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private equipmentUrl =baseUrl + '/api/gym/equipments';
  
  constructor(private http: HttpClient) {}

  getAllEquipments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.equipmentUrl}/all`);
  }
}
