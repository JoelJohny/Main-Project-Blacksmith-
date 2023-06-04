import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userorderview',
  templateUrl: './userorderview.component.html',
  styleUrls: ['./userorderview.component.scss']
})
export class UserorderviewComponent implements OnInit {
  public userlist: any[]=[]
  constructor(private viewservices: UserService) { }

  ngOnInit(): void {
    this.viewservices.getUserBooking(localStorage.getItem("userId")).then(res => {
      console.log(res)
      this.userlist = res;
    })
  }
  
}
