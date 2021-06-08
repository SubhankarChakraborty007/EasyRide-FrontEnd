import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTripService {

  private baseUrl = 'http://localhost:8080/api/v1/bookTrip';

  constructor(private http: HttpClient) { }


  getBookTrip(froml:string, to:string) : Observable<any>{

    return this.http.get(`${this.baseUrl}/getBookTrip/${froml}/${to}`);

  }
}
