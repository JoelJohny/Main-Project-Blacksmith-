import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guestmaster',
  templateUrl: './guestmaster.component.html',
  styleUrls: ['./guestmaster.component.scss']
})
export class GuestmasterComponent {
  appUser!: firebase.User;
  constructor(private authService: GuestService,
  private router: Router
  ) {
  this.authService.appUser$.subscribe((appUser : any) => (this.appUser =
  appUser));
  }
  login() {
  this.authService.login();
  }
  
}