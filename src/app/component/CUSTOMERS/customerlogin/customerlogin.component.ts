import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  customers!: Observable<Customer[]>;
  customer:Customer=new Customer();
  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  clogin(customersigninform:any){
    // this.router.navigate(['customerhome']);

    this.service.customerLogin(this.customer.username,this.customer.password)
    .subscribe(
      data => { console.log(data); alert('Login succesfull !!');
            this.customer=data;
            sessionStorage.setItem('id',this.customer.customerId+'');
            console.log(this.customer.customerId);
            sessionStorage.setItem('name',this.customer.username );
      this.router.navigate(['customerhome']);
    },
      error => { console.log(error);  alert("Failed to Log In !!");}
    );

  }
}

