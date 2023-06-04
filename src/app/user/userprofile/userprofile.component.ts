import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { BlackService } from 'src/app/black/black.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  profileList: any;
  DistrictList: any[] = []
  LocationList: any[] = []
  districtId: any;
  choosenFile: any
  user_id: any;
  public loading = false;
  profileeditform!: FormGroup;

  constructor(private router: Router,private register: UserService, private adminserv: AdminserviceService,private fb: FormBuilder,private view: BlackService) { }

  ngOnInit(): void {
    this.profileeditform = this.fb.group({
      Name: [''],
      Email: [''],
      Phone: [''],
      Address: [''],
      Districtid: [''],
      Locationid: [''],
      Pincode: [''],
      Gender: [''],
     
     
    });
    this.user_id = localStorage.getItem("userId"),
      console.log(this.user_id)
      this.register.getUserById(this.user_id).subscribe((data: any) => {
        this.profileList = data;
        console.log(this.profileList)
        this.profileeditform.patchValue(data);
      });
      this.adminserv.getDistrictList().subscribe((data: any) => {
        this.DistrictList = data;
        console.log(data)
      });
  }
  onChange(event: any) {

    this.view.getLocationByDistrict(this.profileeditform.value.Districtid)
      .subscribe(res => {
        console.log(res)
        this.LocationList = res;
      })
  }
  
  submit()
  {
   
    this.loading = true;
    this.register.AddUserprofile(this.user_id, this.profileeditform.value).then(() => {
      this.loading = false;
      this.router.navigate(["/Userindex"]);
    });
  
  }
}
