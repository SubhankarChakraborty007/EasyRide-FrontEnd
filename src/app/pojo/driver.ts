import { Cab } from "./cab";

export class Driver {

       username:string='';
       password:string='';
       mobileNumber:number=0;
       email:string='';
       driverId:number=0;

       licenseNo:string='';
       cabId:number=0;
       cab!:Cab ;
       rating:number=0;
}

