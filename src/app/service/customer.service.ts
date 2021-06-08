import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Customer } from '../pojo/customer';
import {​​​​​​​​ catchError }​​​​​​​​ from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer!:Customer;
  
  private baseUrl = 'http://localhost:8080/api/v1/customer';
  
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getcustomers`).pipe(catchError(this.handleError));
  }

  //  removeCustomer(customerId: Customer): Observable<any> {
  //    return this.http.delete(`${this.baseUrl}/deleteCustomer/`, customerId);
  //  }

   deleteCustomer(customerId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletecustomer/${customerId}`).pipe(catchError(this.handleError));
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertcustomer/`, customer).pipe(catchError(this.handleError));
  }
  
   editCustomer(customer: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecustomer`, customer).pipe(catchError(this.handleError));
  }

  customerLogin(userName:string,password:string) : Observable<any>{

    return this.http.get(`${this.baseUrl}/validate/${userName}/${password}`).pipe(catchError(this.handleError));

  }

  getCustomerById(customerId:number) : Observable<any>{

    return this.http.get(`${this.baseUrl}/getCustomerById/${customerId}`).pipe(catchError(this.handleError));

  }

  getDataFromForm(customer:Customer){
    this.customer = customer;
  }

  sendDataToAfterLogin(){
    return this.customer;
  }

}





  //  removeCustomer(customerId: Customer): Observable<any> {
  //    return this.http.delete(`${this.baseUrl}/deleteCustomer/`, customerId);
  //  }
  // getCustomerList(): Observable<any> {
  //      return this.http.get(`${this.baseUrl}/getcustomers`);
  //    }
  


