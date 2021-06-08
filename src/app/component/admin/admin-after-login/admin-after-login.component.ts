import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-after-login',
  templateUrl: './admin-after-login.component.html',
  styleUrls: ['./admin-after-login.component.css']
})
export class AdminAfterLoginComponent implements OnInit {


  constructor(private service:AdminService, private route:Router) { }

  name:string='';
  id!:number;


  admin:any;
  ngOnInit(): void {
//    this.admin = this.service.retrieveData();
    if(sessionStorage.getItem('id')!=null)
    {
      this.name=sessionStorage.getItem('name') as string;
      this.id = parseInt(sessionStorage.getItem('id') as string);
   
      console.log(this.id);
    
      this.service.getAdminById(this.id)
        .subscribe(
        data => { console.log(data); 
        this.admin=data;
      },
        error => { console.log(error);  alert(error);}
      );
    }
    else{
      this.route.navigate(['/login']);
    }
  }

  insertAdmin(){
    this.route.navigate(["/insertAdmin"]);
  }

  updateAdmin(){
    this.route.navigate(["/updateAdmin"]);
  }

  deleteAdmin(){
    this.route.navigate(["/deleteAdmin"]);
  }

  getTripByCustomerId(){
    this.route.navigate(["/getTripsById"]);
  }

  getTripCabWise(){
    this.route.navigate(["/getTripsCabwise"])
  }

  getTripDateWise(){
    this.route.navigate(["/getTripsDateWise"]);
  }

  getTripCustomerWise(){
    this.route.navigate(["/getTripsCustomerWise"]);
  }

  viewAllAdmin(){
    this.route.navigate(["/viewAllAdmin"]);
  }

  adminLogout(){
    this.route.navigate(["/adminLogout"]);
  }

}
 