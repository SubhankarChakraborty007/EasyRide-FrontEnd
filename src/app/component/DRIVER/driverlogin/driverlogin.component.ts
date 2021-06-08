import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/pojo/driver';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css']
})
export class DriverloginComponent implements OnInit {

  drivers!: Observable<Driver[]>;
  driver:Driver=new Driver();
id!:number;
  constructor(private service:DriverService, private router:Router) { }

  ngOnInit(): void {
  }

  dlogin(driverloginform:any){
   
   
    this.service.driverLogin(this.driver.username,this.driver.password)
     .subscribe(
      data => { console.log(data); alert('Login succesfull !!');
      this.driver=data;
      sessionStorage.setItem('id',this.driver.driverId+'');
      console.log(this.driver.driverId+'');
      sessionStorage.setItem('name',this.driver.username );
      this.router.navigate(['driverhome']);
    },
      error => { console.log(error);  alert("Failed to Log In !!");}
    );
   }
}
