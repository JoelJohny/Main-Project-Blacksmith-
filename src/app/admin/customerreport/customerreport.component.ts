import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-customerreport',
  templateUrl: './customerreport.component.html',
  styleUrls: ['./customerreport.component.scss']
})
export class CustomerreportComponent implements OnInit {
  public Customerlist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getcustomer().subscribe(res =>{
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