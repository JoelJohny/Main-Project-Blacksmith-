import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
  choosenFile: any
  public loading = false;
  productid: any
  public productlist: any[]=[]
  Productform!: FormGroup;
  constructor(private fb4:FormBuilder,private serv:BlackService,private router: Router,private route: ActivatedRoute) {
    route.params.subscribe(cat => { this.productid = cat['id']; })
   }

  ngOnInit(): void {
    this.Productform=this.fb4.group({
      Product_name:[''],
      Product_Description:[''],
      Price:[''],
      Image:'',
      blacksmith_id : localStorage.getItem("BlacksmithId"),
    })
    this.serv.getproduct().subscribe(res =>{
      console.log(res)
      this.productlist=res;
      })
      if (this.productid) {
        this.serv.getProductById(this.productid)
          .subscribe((result: any) => {
            if (result) {
              this.Productform.patchValue(result);
            }
          })
      }
      else {
        alert("failed");
      }
  }
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
  }
  edit() {
    this.loading = true;
    console.log(this.Productform.value)
    this.serv.upload(this.choosenFile).then(url => {
      if (url) {
        this.Productform.patchValue({
          Image: url
        })
    this.serv.updateProduct(this.productid, this.Productform.value).then(() => {
      this.loading = false;
      this.router.navigate(["/adminmaster/Districtview"]);
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
