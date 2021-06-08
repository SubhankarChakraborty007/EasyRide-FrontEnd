import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/pojo/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  name:string='';
  id!:number;
  admin:any;


//  admin:Admin | undefined

  constructor(private service:AdminService, private route:Router) { }

  ngOnInit(): void {
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

  addAdmin(adminform:NgForm){
    let data = adminform.value;
    this.admin = new Admin(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<Admin> = this.service.insertAdmin(this.admin);
    
    
    observable.subscribe((addAdmin:Admin)=>this.route.navigate(["/home"]), err => alert(err.message));


  }

}
