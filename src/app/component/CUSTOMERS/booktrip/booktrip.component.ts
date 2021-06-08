import { Component, OnInit } from '@angular/core';
import { Tripbooking } from 'src/app/pojo/tripbooking';
import { TripbookingService } from 'src/app/service/tripbooking.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Observable } from 'rxjs';
import { BookTripService } from 'src/app/service/book-trip.service';
import { BookTrip } from 'src/app/pojo/book-trip';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-booktrip',
  templateUrl: './booktrip.component.html',
  styleUrls: ['./booktrip.component.css']
})
export class BooktripComponent implements OnInit 
{
 
  tripbooking:Tripbooking = new Tripbooking();
  
  id!:number;
  customers!:any;
  customer:Customer=new Customer();
  trip: BookTrip = new BookTrip();
  tripResult: BookTrip = new BookTrip();
  totalFair: number=0;
 
  constructor(
    private service : TripbookingService,
    private cservice : CustomerService,
    private router:Router,
    private bookTripService: BookTripService) { }
 
  ngOnInit(): void {

    this.reloadData();

    }
 
  reloadData() 
  {
 
    let x:string = sessionStorage.getItem('id') as string ;
    // alert(x);
    this.id=+x;
  //  alert(this.id);
  //  alert(x);
  //  this.customer.id=sessionStorage.getItem('id')  ;
   this.cservice.getCustomerById(this.id)
     .subscribe(
      data => { console.log(data); 
      this.customer=data;
     },
      error => { console.log(error);  alert(error);}
      );
    }
 


    onSubmit(f: NgForm) {
      this.trip = f.value;
      this.bookTripService.getBookTrip(this.trip.froml, this.trip.toLocation).subscribe(
        result => {
          this.tripResult=result;
          console.log(this.tripResult);
          if(this.trip.carType==='1') {
            this.totalFair=this.tripResult.totalDistance * 20;
            console.log(this.trip.froml);
            console.log(this.trip.carType);
            console.log(this.tripResult.totalDistance);
            alert("Your trip has been booked with Hatchback.   Total fair is : " + this.totalFair);
        }
        else if(this.trip.carType==='2') {
            this.totalFair=this.tripResult.totalDistance * 25;
            console.log(this.trip.froml);
            console.log(this.trip.carType);
            console.log(this.tripResult.totalDistance);
            alert("Your trip has been booked with Sedan.   Total fair is : " + this.totalFair);
        }
        else  {
            this.totalFair=this.tripResult.totalDistance * 30;
            console.log(this.trip.froml);
            console.log(this.trip.carType);
            console.log(this.tripResult.totalDistance);
            alert("Your trip has been booked.   Total fair is : " + this.totalFair);
        }
        this.router.navigate(["/customerhome"]);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
     
    }

  }
