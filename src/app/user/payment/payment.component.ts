import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
Paymentid:any
mydate:any
  constructor(private register: UserService, private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute,private date:DatePipe) {
      route.params.subscribe(cat => { this.Paymentid = cat['id']; })
     }

  ngOnInit(): void {
  }

  onSubmit(){
    this.mydate=this.date.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    this.register.updatePaymentSuccess(this.Paymentid, this.mydate).then(res => {
      console.log(res)
      this.router.navigate(["/UserMaster/Paymentconfirm"]);
    })
  }
}
