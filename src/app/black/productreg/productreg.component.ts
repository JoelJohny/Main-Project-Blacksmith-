import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-productreg',
  templateUrl: './productreg.component.html',
  styleUrls: ['./productreg.component.scss']
})
export class ProductregComponent implements OnInit {
  choosenFile: any
  public loading = false;

  Productform!: FormGroup;
  constructor(private fb4:FormBuilder,private serv:BlackService,private router: Router) { }
 
  ngOnInit(): void {  
    this.Productform=this.fb4.group({
      Product_name:[''],
      Product_Description:[''],
      Price:[''],
      Image:'',
      blacksmith_id : localStorage.getItem("BlacksmithId"),
    })
  }
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
  }
  submit() {
    this.loading = true;
    console.log(this.Productform.value)
    this.serv.upload(this.choosenFile).then(url => {
      if (url) {
        this.Productform.patchValue({
          Image: url
        })

        this.serv.productreg( this.Productform.value).then(() => {
          this.loading = false;
          this.router.navigate(["/Blackmaster"]);
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
}
