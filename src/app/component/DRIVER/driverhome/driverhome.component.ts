import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/pojo/driver';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-driverhome',
  templateUrl: './driverhome.component.html',
  styleUrls: ['./driverhome.component.css']
})
export class DriverhomeComponent implements OnInit {

  name:string='';
  id!:number;
  drivers:any;
  driver:Driver=new Driver();
    
  constructor(private service:DriverService,private route:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('id')!=null)
    {
    this.name=sessionStorage.getItem('name') as string;
    
    this.id = parseInt(sessionStorage.getItem('id') as string);
   
    console.log(this.id);
    
     
     this.service.getDriverById(this.id)
     .subscribe(
      data => { console.log(data); 
      this.driver=data;
    
      
      },
      error => { console.log(error);  alert(error);}
      );
    }
    else{
      this.route.navigate(['/driverlogin']);

    }
  }

}
