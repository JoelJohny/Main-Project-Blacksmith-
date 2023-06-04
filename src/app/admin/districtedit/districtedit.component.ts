import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-districtedit',
  templateUrl: './districtedit.component.html',
  styleUrls: ['./districtedit.component.scss']
})
export class DistricteditComponent implements OnInit {

  districtList: any[] = [];
  districtId: any;

  districteditform!: FormGroup;
  constructor(private register: AdminserviceService, private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute) {
    route.params.subscribe(cat => { this.districtId = cat['id']; })
  }
  ngOnInit(): void {
    this.districteditform = this.fb.group({
      District_name: [''],
    });

    this.register.getdistrict().subscribe((data: any) => {
      this.districtList = data;
      console.log(this.districtList)
    });
    if (this.districtId) {
      this.register.getDistrictById(this.districtId)
        .subscribe((result: any) => {
          if (result) {
            this.districteditform.patchValue(result);
          }
        })
    }
    else {
      alert("failed");
    }


  }

  edit() {
    this.register.updateDistrict(this.districtId, this.districteditform.value).then(() => {
      this.router.navigate(["/adminmaster/Districtview"]);
    });
  }

}


