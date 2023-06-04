import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-locationedit',
  templateUrl: './locationedit.component.html',
  styleUrls: ['./locationedit.component.scss']
})
export class LocationeditComponent implements OnInit {

  locationList: any[] = [];
  locationId: any;

  locationeditform!: FormGroup;
  constructor(private register: AdminserviceService, private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute) {
    route.params.subscribe(cat => { this.locationId = cat['id']; })
  }
  ngOnInit(): void {
    this.locationeditform = this.fb.group({
      
      Location_name:['']
    });

    this.register.getAllLocation().then((data: any) => {
      this.locationList = data;
      console.log(this.locationList)
    });
    if (this.locationId) {
      this.register.getLocationById(this.locationId)
        .subscribe((result: any) => {
          if (result) {
            this.locationeditform.patchValue(result);
          }
        })
    }
    else {
      alert("failed");
    }


  }

  edit() {
    this.register.updateLocation(this.locationId, this.locationeditform.value).then(() => {
      this.router.navigate(["/adminmaster/Locationview"]);
    });
  }

}


