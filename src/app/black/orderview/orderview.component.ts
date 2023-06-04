import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.scss']
})
export class OrderviewComponent implements OnInit {
  public blacklist: any[] = []
  public load=false
  constructor(private viewservices: BlackService, private router: Router) { }

  ngOnInit(): void {
    this.viewservices.getBookingPending(localStorage.getItem("BlacksmithId")).then(res => {
      console.log(res)
      this.blacklist = res;
    })
  }
 
  Success(Bookingid: any,Customerid: any) {
    this.load=true
    this.viewservices.updateBookingSuccess(Bookingid,Customerid).then(() => {

      // this.viewservices.paymentupdate(Bookingid)
        this.load=false
        window.location.reload()
        this.router.navigate(["/orderview"]);
    
    });
  }
  Reject(Bookingid: any) {
    this.viewservices.updateBookingReject(Bookingid).then(() => {
      window.location.reload()
      this.router.navigate(["/orderview"]);
    });
  }
}