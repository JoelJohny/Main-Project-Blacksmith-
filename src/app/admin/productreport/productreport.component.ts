import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-productreport',
  templateUrl: './productreport.component.html',
  styleUrls: ['./productreport.component.scss']
})
export class ProductreportComponent implements OnInit {
  public Customerlist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getProduct().subscribe(res =>{
      console.log(res)
      this.Customerlist=res;
      })
  }
  delete(Districtid:any){
    if(confirm("Are u sure?")){
      this.viewservices.deletedist(Districtid).then(
        ()=>
        
        (error:any)=>console.error(error)
      )
    }
  }
}