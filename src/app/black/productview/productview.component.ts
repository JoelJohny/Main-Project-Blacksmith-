import { Component, OnInit } from '@angular/core';
import { BlackService } from '../black.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {
  black_id:any
  public productlist: any[]=[]
  constructor(private viewservices: BlackService) { }

  ngOnInit(): void {
    this.black_id = localStorage.getItem("BlacksmithId"),
    this.viewservices.getProductByBlack(this.black_id).subscribe(res =>{
      console.log(res)
      this.productlist=res;
      })
  }
  delete(proid:any){
    if(confirm("Are u sure?")){
      this.viewservices.deleteproduct(proid).then(
        ()=>
        
        (error:any)=>console.error(error)
      )
    }
  }
}
