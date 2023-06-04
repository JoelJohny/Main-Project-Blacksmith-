import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { UserService } from '../user.service';
@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent implements OnInit {
  appUser!: firebase.User;
  constructor(private authService: UserService,
    private router: Router) {
      this.authService.appUser$.subscribe((appUser : any) => (this.appUser =
        appUser));
        
     }

  ngOnInit(): void {
    
  }
  logout() {
   
    this.authService.logout();
    this.router.navigate(["/guestmaster/guesthome"]);
    }
}
