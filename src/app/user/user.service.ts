import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUser$;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private storage: AngularFireStorage,private router: Router) { 
    this.appUser$ = this.afAuth.authState
  }
  logout() {
    
    this.afAuth.signOut().then(() => {
     

    });
  }
  getUserById(CustomerId: any) {
    const productData =
      this.afs.doc<any>("Customer/" + CustomerId).valueChanges();
    return productData;
  }
  AddUserprofile(profile_id: string, profile: any) {
    
    const DistrictData = JSON.parse(JSON.stringify(profile));
    return this.afs.doc("Customer/" + profile_id).update(profile);
  }
  Bookingreg(Bookingdata: any) {
    const CategoryData = JSON.parse(JSON.stringify(Bookingdata));
    return this.afs.collection("Booking").add(CategoryData);
  }
  getProductList() {
    return this.afs.collection<any>("Product").snapshotChanges()
      .pipe(map((item: any) => {
        const distData: any[] = []
        if (item) {
          item.forEach((el: any) => {
            distData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })

          })
        }
        return distData;

      }))

  }
  getUserBooking(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Booking", (ref) => ref.where("Customerid",
        "==", catId))
        .valueChanges({ idField: "Bookingid" })
        .subscribe(prodRes => {
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
       
        })
    })

  }
  getOrderList() {
    return this.afs.collection<any>("Booking").snapshotChanges()
      .pipe(map((item: any) => {
        const distData: any[] = []
        if (item) {
          item.forEach((el: any) => {
            distData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })

          })
        }
        return distData;

      }))

  }
  getUserBookingSuccess(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Payment", (ref) => ref.where("Customerid",
        "==", catId).where("Payment_status","==","Pending"))
        .valueChanges({ idField: "Paymentid" })
        .subscribe(prodRes => {
          this.getOrderList().subscribe(res => {
            prodRes.forEach(el => {
              el.Total_amount = res.find(el1 => el1.id === el.Orderid)?.Total_amount,
              el.Prdouct_Delivery_date = res.find(el1 => el1.id === el.Orderid)?.Prdouct_Delivery_date,
              el.Productid = res.find(el1 => el1.id === el.Orderid)?.Productid,
              el.Order_status = res.find(el1 => el1.id === el.Orderid)?.Order_status

            })
            resolve(prodRes)
          })
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  updatePaymentSuccess(Productid: string,Date:string) {
    const booking={
Payment_status:"Success",
Payment_date:Date
    }
    return this.afs.doc("Payment/" + Productid).update(booking);
  }
}
