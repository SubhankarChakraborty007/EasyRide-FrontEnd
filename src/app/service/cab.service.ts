import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cab } from '../pojo/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private baseUrl = 'http://localhost:8080/api/v1/cab';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }


  addCab(cab: Cab): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertcab/`, cab).pipe(catchError(this.handleError));
  }

  editCab(cab: Cab): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecab/`, cab).pipe(catchError(this.handleError));
  }

  deleteCab(cabId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteCabById/${cabId}`).pipe(catchError(this.handleError));
  }

  getCabsOfType(carType:string): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getCabtype/${carType}`).pipe(catchError(this.handleError));
  }

  countCabsOfType(carType:string): Observable<any>
  {
      return this.http.get(`${this.baseUrl}/getCabCount/${carType}`).pipe(catchError(this.handleError));
  }
}