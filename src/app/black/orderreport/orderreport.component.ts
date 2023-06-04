import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrls: ['./orderreport.component.scss']
})
export class OrderreportComponent implements OnInit {
userlist:any[]=[]
value:any[]=[]
totalamt=0
dailyorder!:FormGroup
  constructor(private view:BlackService,private router:Router,private royte:ActivatedRoute,private fb:FormBuilder) { }
  categoryControl = new FormControl('');
  todateControl= new FormControl('')
  ngOnInit(): void {
    this.dailyorder=this.fb.group({ 
      totalamount:[''],
      // categoryControl:[''],
      // todateControl:['']
      });
     
  }
  onChange(event: any) {
    console.log(this.categoryControl.value,this.todateControl.value)
    this.view.getbookingBydate(this.categoryControl.value,this.todateControl.value) .then(res => {
    console.log(res)
    // this.cartSum() ;
    this.userlist = res;
    this.value=this.userlist
    for(let i=0;i<this.userlist.length;i++){
    this.totalamt+=this.value[i].Total_amount;
    console.log(this.totalamt) }
    this.dailyorder.get("totalamount")?.setValue(this.totalamt)
    })
  }
}
