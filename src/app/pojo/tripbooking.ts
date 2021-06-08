import { Driver } from "./driver";

export class Tripbooking {

     tripBookingId:number=0;
     customerId:number=0;
	 driver!:Driver;
     fromLocation:string='';
	 toLocation:string='';
	 fromDateTime!:Date;
     toDateTime!:Date;
     status:boolean=false;
     driverId:number=0;
	 distanceInKm:number=0;
	 bill:number=0;
}
