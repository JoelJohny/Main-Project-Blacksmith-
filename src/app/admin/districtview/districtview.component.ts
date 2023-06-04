import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent implements OnInit {
  public districtlist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getdistrict().subscribe(res =>{
      console.log(res)
      this.districtlist=res;
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
