import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss']
})
export class LocationviewComponent implements OnInit {

  public locationlist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getAllLocation().then(res =>{
      console.log(res)
      this.locationlist=res;
      })
  }
  delete(Locationid:any){
    if(confirm("Are u sure?")){
      this.viewservices.deleteloca(Locationid).then(
        ()=>
        
        (error:any)=>console.error(error)
      )
    }
  }
}
