import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  public blacklist: any[] = []
  public load=false
  constructor(private viewservices: BlackService, private router: Router) { }

  ngOnInit(): void {
    this.viewservices.getAllPaymentSuccess(localStorage.getItem("BlacksmithId")).then(res => {
      console.log(res)
      this.blacklist = res;
    })
  }
 
  Success(Bookingid: any,Paymentid:any) {
    this.load=true
    console.log("Happy")
    console.log(Paymentid)
    this.viewservices.updateDelivery(Bookingid,Paymentid).then(() => {

      
        this.load=false
        this.router.navigate(["/orderview"]);
    
    });
  }
 
  // Reject(Bookingid: any) {
  //   this.viewservices.updateBookingReject(Bookingid).then(() => {

  //     this.router.navigate(["/orderview"]);
  //   });
  // }
}