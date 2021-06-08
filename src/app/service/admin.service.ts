import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Admin } from '../pojo/admin';
import {​​​​​​​​ catchError }​​​​​​​​ from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin:any;

  baseUrl = 'http://localhost:8080/api/v1/admin';

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }

  adminLogin(userName:string,password:string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/validate/${userName}/${password}`).pipe(catchError(this.handleError));
  }

  insertAdmin(admin:Admin):Observable<Admin>{
    const url = this.baseUrl + `/insertAdmin`;
    let observable:Observable<Admin> = this.http.post<Admin>(url,admin);
    return observable;
  }

  updateAdmin(admin:Admin):Observable<Admin>{
    const url = this.baseUrl + `/updateAdmin`;
    let observable:Observable<Admin> = this.http.put<Admin>(url, admin);
    return observable;
  }

  deleteAdmin(id:number){
    const url = this.baseUrl + `/deleteAdmin/` + id;
    return this.http.delete(url);
  }

  getAllAdmin(){
    const url = this.baseUrl + `/viewAllAdmin`;
    let admins = this.http.get(url);
    return admins;
  }

  getAdminById(id:number){
    const url = this.baseUrl + `/admin/${id}`;
    let admin = this.http.get(url);
    return admin;
  }

  getTripCabWise(){
    const url = this.baseUrl + `/tripsCabwise`;
    let trips = this.http.get(url);
    return trips;
  }

  getTripCustomerWise(){
    const url = this.baseUrl + `/tripsCustomerwise`;
    let trips = this.http.get(url);
    return trips;
  }

  getTripsDateWise(){
    const url = this.baseUrl + `/tripsDatewise`;
    let trips = this.http.get(url);
    return trips;
  }

  getAllTripsForDays(id:number, fromDate:string, toDate:string){
    const url = this.baseUrl + `/fordays/${id}/${fromDate}/${toDate}`;
    let trips = this.http.get(url);
    return trips;
  }

  getTripByCustomerId(id:number){
    const url = this.baseUrl + `/alltrips/${id}`;
    let trips = this.http.get(url);
    return trips;
  }

  retrieveData(){
    return this.admin;
  }

}