import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.component.html',
  styleUrls: ['./paymentview.component.scss']
})
export class PaymentviewComponent implements OnInit {

  public blacklist: any[] = []
  public load=false
  constructor(private viewservices: BlackService, private router: Router) { }

  ngOnInit(): void {
    this.viewservices.getAllPayment(localStorage.getItem("BlacksmithId")).then(res => {
      console.log(res)
      this.blacklist = res;
    })
  }
 
  // Success(Bookingid: any) {
  //   this.load=true
  //   this.viewservices.updateBookingSuccess(Bookingid).then(() => {

  //     // this.viewservices.paymentupdate(Bookingid)
  //       this.load=false
  //       this.router.navigate(["/orderview"]);
    
  //   });
  // }
 
  Reject(Bookingid: any) {
    this.viewservices.updateBookingReject(Bookingid).then(() => {

      this.router.navigate(["/orderview"]);
    });
  }
}