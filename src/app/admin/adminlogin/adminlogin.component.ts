import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(private userauth: AdminserviceService,private router: Router,private fb: FormBuilder,private route:ActivatedRoute) { }
  LoginForm = this.fb.group({
    email : [''],
    password : ['']
    })
  ngOnInit(): void {
  }
  onsubmit() {
    this.userauth.login(this.LoginForm.value).then(res=> {
     this.router.navigate(['/adminmaster/adminhome'])
    })
    .catch(er=> {
    alert('invalid username')
    }) 
    }

}
