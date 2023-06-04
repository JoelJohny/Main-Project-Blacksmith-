import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-blacksmiview',
  templateUrl: './blacksmiview.component.html',
  styleUrls: ['./blacksmiview.component.scss']
})
export class BlacksmiviewComponent implements OnInit {
  public blacklist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getblack().subscribe(res =>{
      console.log(res)
      this.blacklist=res;
      })
  }
  delete(Blackid:any){
    if(confirm("Are u sure?")){
      this.viewservices.deleteblack(Blackid).then(
        ()=>
        
        (error:any)=>console.error(error)
      )
    }
  }
}
