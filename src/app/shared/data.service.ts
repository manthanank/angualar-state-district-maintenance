import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // getStates() {
  //   return this.http.get('http://localhost:3000/states');
  // }
  // getDistricts() {
  //   return this.http.get('http://localhost:3000/districts');
  // }
  // postStates(data: any) {
  //   return this.http.post('http://localhost:3000/states', data);
  // }
  // postDistricts(data: any) {
  //   return this.http.post('http://localhost:3000/districts', data);
  // }
  getDistrict(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/districts');
  }
  postDistrict(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/districts', data);
  }
  getState(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/states');
  }
  postState(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/states', data);
  }
}
