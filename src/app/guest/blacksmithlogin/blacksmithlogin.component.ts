import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-blacksmithlogin',
  templateUrl: './blacksmithlogin.component.html',
  styleUrls: ['./blacksmithlogin.component.scss']
})
export class BlacksmithloginComponent implements OnInit {

  blackLoginForm!:FormGroup


  constructor(private loginservice:GuestService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router)
   { }


  BlackList:any[]=[];
  Lemail = new FormControl('');
  Lpswd=new FormControl('');
  ngOnInit(): void {
  this.blackLoginForm = this.fb.group({
    Email: [''],
    Password: ['']
  })
  }
  onsubmit() { 
    console.log(this.blackLoginForm.value)
    this.loginservice.ProviderLogin(this.blackLoginForm.value)
    .subscribe(res => {
    console.log(res)
    this.BlackList = res;
    console.log(this.BlackList)
    if(this.BlackList.length>0)
    {
    localStorage.setItem('BlacksmithId',this.BlackList.map(t=>t.BlacksmithId).toString());

    this.router.navigate(['/Blackmaster/Blackhome']);
    }
    else
    {
    alert("Please check your password and email")
    }
    })
    } 
    }