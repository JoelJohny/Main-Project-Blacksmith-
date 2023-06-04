import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-blacksmithview',
  templateUrl: './blacksmithview.component.html',
  styleUrls: ['./blacksmithview.component.scss']
})
export class BlacksmithviewComponent implements OnInit {
  public blacklist: any[]=[]
  constructor(private viewservices: AdminserviceService) { }

  ngOnInit(): void {
    this.viewservices.getblack().subscribe(res =>{
      console.log(res)
      this.blacklist=res;
      })
  }
  
}
