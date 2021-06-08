import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Driver } from '../pojo/driver';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:8080/api/v1/driver';
   
  constructor( private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }

  addDriver(driver: Driver): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertdriver/`, driver).pipe(catchError(this.handleError));
  }

  editDriver(driver: Driver): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatedriver/`, driver).pipe(catchError(this.handleError));
  }

  deleteDriver(driverId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletedriver/${driverId}`).pipe(catchError(this.handleError));
  }

  getBestDriversList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bestdriver`).pipe(catchError(this.handleError));
  }

  getDriverById(driverId:number) : Observable<any>{

    return this.http.get(`${this.baseUrl}/getDriverById/${driverId}`).pipe(catchError(this.handleError));

  }

  driverLogin(userName:string,password:string) : Observable<any>{

    return this.http.get(`${this.baseUrl}/validate/${userName}/${password}`).pipe(catchError(this.handleError));

  }
}
