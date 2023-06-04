import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileList: any;
  DistrictList: any[] = []
  LocationList: any[] = []
  districtId: any;
  choosenFile: any
  black_id: any;
  public loading = false;
  profileeditform!: FormGroup;
  constructor(private register: BlackService, private adminserv: AdminserviceService, private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.profileeditform = this.fb.group({
      Blacksmith_name: [''],
      Email: [''],
      Phone: [''],
      Address: [''],
      Districtid: [''],
      Locationid: [''],
      Pincode: [''],
      Country: [''],
      State: [''],
      Image: ''
    });
    this.black_id = localStorage.getItem("BlacksmithId"),
      console.log(this.black_id)
    this.register.getBlacksmithById(this.black_id).subscribe((data: any) => {
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

    this.register.getLocationByDistrict(this.profileeditform.value.Districtid)
      .subscribe(res => {
        console.log(res)
        this.LocationList = res;
      })
  }

  submit() {
    this.loading = true;
    this.register.upload(this.choosenFile).then(url => {
      if (url) {
        this.profileeditform.patchValue({
          Image: url
        })

        this.register.Addprofile(this.black_id, this.profileeditform.value).then(() => {
          this.loading = false;
          this.router.navigate(["/Profile"]);
        });
      } else {
        alert("image upload error")
      }

    })

      .catch(err => {
        this.loading = false;
        console.log(err)
      })
  }
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
  }
}





