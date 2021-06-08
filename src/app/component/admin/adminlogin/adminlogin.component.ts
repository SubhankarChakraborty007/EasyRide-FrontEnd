import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/pojo/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admins!: Observable<Admin[]>;
  admin:Admin=new Admin('','','','');

  constructor(private service:AdminService, private route:Router) { }

  ngOnInit(): void {
  }


  alogin(adminloginform:any){
    let data = adminloginform.value;

    // Validate Admin Credentials
    this.service.adminLogin(data.username,data.password)

    .subscribe(
      data => { console.log(data); alert('Login succesfull !!');
            this.admin=data;
            sessionStorage.setItem('id',data.adminId+'');
            console.log(data.adminId+'');
            sessionStorage.setItem('name',data.username );

            this.route.navigate(['adminHome']);
    },
      error => { console.log(error);  alert("Failed to Log In !!");}
    );

  }
}

