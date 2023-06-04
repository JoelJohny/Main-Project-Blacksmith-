import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { BlackService } from 'src/app/black/black.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-productbooking',
  templateUrl: './productbooking.component.html',
  styleUrls: ['./productbooking.component.scss']
})
export class ProductbookingComponent implements OnInit {
  productid:any
  productlist:any
  totalamt:any
  value:any
  bookingform!:FormGroup
  black:any
  LocalDate : String = new Date().toLocaleDateString();
  mydate:any
  constructor(private viewservices: AdminserviceService,private register: BlackService,private router: Router,private route: ActivatedRoute,private fb: FormBuilder,private User: UserService,private date:DatePipe) { 
    route.params.subscribe(cat => { this.productid = cat['id']; 
  })
    
  }

  ngOnInit(): void {
    this.mydate=this.date.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    document.getElementById("dd").setAttribute('min',this.mydate)
    console.log(this.mydate)
    this.register.getProductById(this.productid).subscribe(res =>{
      console.log(res)
      this.productlist=res;
      console.log(this.productlist.blacksmith_id)
      this.black=this.productlist.blacksmith_id
      })
      this.bookingform = this.fb.group({
        Quantity: [''],
        Total_amount:[''],
        Order_date:this.mydate,
        Order_status:['Pending'],
        Prdouct_Delivery_date:[''],
        Customerid:localStorage.getItem("userId"),
        Blacksmithid:localStorage.getItem("blackId"),
        Productid:this.productid

      })
     console.log(this.black)
  }
  onChange(event: any){  
    this.totalamt=0;
    this.value=this.productlist.Price
    this.black=this.productlist.blacksmith_id
      
      this.totalamt=this.value*this.bookingform.value.Quantity;
      
    console.log(this.totalamt)
    
   this.bookingform.get("Total_amount")?.setValue(this.totalamt)
   // console.log(this.quantity.value* this.productList.product_amount)
   
       }
       onChange1(event: any){
        console.log(this.bookingform.value.date)
       }
       submit()
       {
        console.log(this.bookingform.value) 
        this.User.Bookingreg( this.bookingform.value).then(() => {
          // this.loading = false;
          this.router.navigate(["/UserMaster/bookingconfirm"]);
        });
       }
}
