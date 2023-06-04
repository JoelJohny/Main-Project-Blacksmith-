import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationform!:FormGroup
  savestatus=false
  DistrictList:any[]=[];
  constructor(private fb4:FormBuilder,private serv:AdminserviceService,private router: Router) { }
 
  ngOnInit(): void {
    this.locationform=this.fb4.group({
      Districtid : ['',Validators.required],
      Location_name:['',Validators.required]
      
    })
    this.serv.getDistrictList().subscribe((data: any) => {
      this.DistrictList = data;
      console.log(data)
    });
  }
  submit(){
    if(!this.locationform.valid)
    {
      console.log(this.locationform.valid)
      this.savestatus=true
      return
    }
    else
    {
    console.log(this.locationform.value)
    this.serv.locationreg(this.locationform.value).then(() => {
      this.router.navigate(['/adminmaster/Locationview'])
    });
  }
  }
}
