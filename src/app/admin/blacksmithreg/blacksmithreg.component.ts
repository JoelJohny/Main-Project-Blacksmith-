import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-blacksmithreg',
  templateUrl: './blacksmithreg.component.html',
  styleUrls: ['./blacksmithreg.component.scss']
})
export class BlacksmithregComponent implements OnInit {
  savestatus=false
  constructor(private fb4:FormBuilder,private serv:AdminserviceService,private router: Router) { }
  Blacksmithform=this.fb4.group({
    Blacksmith_name:['',Validators.required],
    Email:['',Validators.required],
    Phone:['',Validators.required],
    Password:['',Validators.required],
    
  })
  ngOnInit(): void {  
  }
  submit(){
    if(!this.Blacksmithform.valid)
    {
      alert("Enter the details")
      console.log(this.Blacksmithform.valid)
      this.savestatus=true
      return
    }
    else
    {
    console.log(this.Blacksmithform.value)
    this.serv.blacksmithreg(this.Blacksmithform.value).then(() => {
      this.router.navigate(['/adminmaster'])
    });
  }
}
}
