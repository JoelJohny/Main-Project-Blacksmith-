import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { BlackService } from 'src/app/black/black.service';

@Component({
  selector: 'app-blacksmithviewmore',
  templateUrl: './blacksmithviewmore.component.html',
  styleUrls: ['./blacksmithviewmore.component.scss']
})
export class BlacksmithviewmoreComponent implements OnInit {
  black_id:any;
  public blacklist: any;
  Gallerylist:any
  productlist:any
  constructor(private viewservices: AdminserviceService,private register: BlackService,private router: Router,private route: ActivatedRoute) { 
    route.params.subscribe(cat => { this.black_id = cat['id']; })
  }

  ngOnInit(): void {
   
    localStorage.setItem('blackId',(this.black_id));
      this.register.getBlacksmithById(this.black_id).subscribe((data: any) => {
        this.blacklist = data;
      })
      this.register.getGalleryByBlack(this.black_id)
      .subscribe(res => {
        console.log(res)
        this.Gallerylist = res;
      })
      this.register.getProductByBlack(this.black_id).subscribe(res =>{
        console.log(res)
        this.productlist=res;
        })
  }
  
}