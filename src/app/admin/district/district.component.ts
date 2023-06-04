import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  savestatus=false
  constructor(private fb4:FormBuilder,private serv:AdminserviceService,private router: Router) { }
  Districtform=this.fb4.group({
    District_name:['',Validators.required],
    
  })
  ngOnInit(): void {  
  }
  submit(){
    if(!this.Districtform.valid)
    {
      alert("Enter the details")
      console.log(this.Districtform.valid)
      this.savestatus=true
      return
    }
    else
    {
    this.serv.districtreg(this.Districtform.value).then(() => {
      this.router.navigate(['/adminmaster/Districtview'])
    });
  }
  }
  
}
