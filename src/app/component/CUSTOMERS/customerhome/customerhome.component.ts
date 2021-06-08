import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  name:string='';
  customer:Customer=new Customer;
  customers:any;
  id!:number;
  constructor(private service:CustomerService,private route:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('id')!=null)
    {
    this.name=sessionStorage.getItem('name') as string;
    
    this.id = parseInt(sessionStorage.getItem('id') as string);
   
    console.log(this.id);
    
     
     this.service.getCustomerById(this.id)
     .subscribe(
      data => { console.log(data); 
      this.customer=data;
    
      
      },
      error => { console.log(error);  alert(error);}
      );
    }
    else{
      this.route.navigate(['/login']);

    }
    

  }

}
