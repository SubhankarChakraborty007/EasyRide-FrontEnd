import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Tripbooking } from '../pojo/tripbooking';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TripbookingService {
  private baseUrl = 'http://localhost:8080/api/v1/trip';
  
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }

  GetAllTripsCustomer(customerId:number): Observable<any> 
  { 
    return this.http.get(`${this.baseUrl}/getAlltripsCustomerById/${customerId}`).pipe(catchError(this.handleError));
  }

  addTrip(trip: Tripbooking): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertTrip/`, trip).pipe(catchError(this.handleError));
  }

  editTrip(trip: Tripbooking): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateTrip/`, trip).pipe(catchError(this.handleError));
  }

  deleteTrip(customerId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteTrip/${customerId}`).pipe(catchError(this.handleError));
  }
}
