import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.scss']
})
export class UserpaymentComponent implements OnInit {
  public userlist: any[]=[]
  constructor(private viewservices: UserService) { }

  ngOnInit(): void {
    this.viewservices.getUserBookingSuccess(localStorage.getItem("userId")).then(res => {
      console.log(res)
      this.userlist = res;
    })
  }
  
}
