import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlackService {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private storage: AngularFireStorage) { }
  getBlacksmithById(BlacksmithId: any) {
    const productData =
      this.afs.doc<any>("Blacksmith/" + BlacksmithId).valueChanges();
    return productData;
  }
  getLocationByDistrict(catId: any) {
    console.log(catId)
    return this.afs.collection('Location', (ref) => ref.where("Districtid",
      "==", catId))
      .valueChanges({ idField: "Locationid" })
  }
  upload(file: any) {
    const path = `Images/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        res.ref.getDownloadURL()
          .then(url => {
            console.log(url)
            resolve(url);
          })
          .catch((err) => {
            console.log(err);
            reject(err.code_)
          })
      })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_)
        })
    })
  }

  Addprofile(profile_id: string, profile: any) {
    
    const DistrictData = JSON.parse(JSON.stringify(profile));
    return this.afs.doc("Blacksmith/" + profile_id).update(profile);
  }
  Addgallery(GalleryData: any) {
    const galleryData = JSON.parse(JSON.stringify(GalleryData));
    return this.afs.collection("Gallery").add(galleryData);
  }
  getGalleryByBlack(catId: any) {
    console.log(catId)
    return this.afs.collection('Gallery', (ref) => ref.where("blacksmith_id",
      "==", catId))
      .valueChanges({ idField: "Galleryid" })
  }
  updategallery(gallery_id: string, gallery: any) {
    console.log(gallery)
    const DistrictData = JSON.parse(JSON.stringify(gallery));
    return this.afs.doc("Gallery/" + gallery_id).update(gallery);
  }
  productreg(categoryData: any) {
    const CategoryData = JSON.parse(JSON.stringify(categoryData));
    return this.afs.collection("Product").add(CategoryData);
  }
  getproduct() {
    return this.afs.collection("Product", (ref) => ref.orderBy("Product_name"))
      .valueChanges({ idField: "Productid" })
  }
  deleteproduct(Productid: string) {
    return this.afs.doc("Product/" + Productid).delete();
  }
  getProductById(Productid: any) {
    const productData =
      this.afs.doc<any>("Product/" + Productid).valueChanges();
    return productData;
  }
  getProductByBlack(catId: any) {
    console.log(catId)
    return this.afs.collection('Product', (ref) => ref.where("blacksmith_id",
      "==", catId))
      .valueChanges({ idField: "Productid" })
  }
  getOrderByBlack(catId: any) {
    console.log(catId)
    return this.afs.collection('Booking', (ref) => ref.where("Blacksmithid",
      "==", catId))
      .valueChanges({ idField: "Bookingid" })
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
  getCustomerList() {
    return this.afs.collection<any>("Customer").snapshotChanges()
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
  getBookingPending(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Booking", (ref) => ref.where("Blacksmithid",
        "==", catId).where("Order_status","==","Pending"))
        .valueChanges({ idField: "Bookingid" })
        .subscribe(prodRes => {
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  getAllBooking(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Booking", (ref) => ref.where("Blacksmithid",
        "==", catId))
        .valueChanges({ idField: "Bookingid" })
        .subscribe(prodRes => {
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  getAllPaymentSuccess(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Payment", (ref) => ref.where("Blacksmithid",
        "==", catId).where("Payment_status","==","Success"))
        .valueChanges({ idField: "Paymentid" })
        .subscribe(prodRes => {
          this.getOrderList().subscribe(res => {
            prodRes.forEach(el => {
              el.Total_amount = res.find(el1 => el1.id === el.Orderid)?.Total_amount,
              el.Prdouct_Delivery_date = res.find(el1 => el1.id === el.Orderid)?.Prdouct_Delivery_date
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  getAllPayment(catId: any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Payment", (ref) => ref.where("Blacksmithid",
        "==", catId))
        .valueChanges({ idField: "Paymentid" })
        .subscribe(prodRes => {
          this.getOrderList().subscribe(res => {
            prodRes.forEach(el => {
              el.Total_amount = res.find(el1 => el1.id === el.Orderid)?.Total_amount,
              el.Prdouct_Delivery_date = res.find(el1 => el1.id === el.Orderid)?.Prdouct_Delivery_date
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  updateBookingSuccess(Orderid: string,Customerid: string) {
    const booking={
Order_status:"Success"
    }
    const payment={
      Payment_status:"Pending",
      Blacksmithid:localStorage.getItem("BlacksmithId"),
      Orderid:Orderid,
      Customerid:Customerid
    }
  
     this.afs.collection("Payment").add(payment);
    return this.afs.doc("Booking/" + Orderid).update(booking);
     
   
  }
  updateBookingReject(Productid: string) {
    const booking={
Order_status:"Reject",
    }
    return this.afs.doc("Booking/" + Productid).update(booking);
  }
  updateDelivery(Productid: string,Paymentid: string) {
    const booking={
Order_status:"Delivered",
    }
    const payment={
      Payment_status:"Successful"
    }
    this.afs.doc("Payment/" + Paymentid).update(payment);
    
    return this.afs.doc("Booking/" + Productid).update(booking);
  }
//   paymentupdate(Productid: string) {
//   const payment={
//     Payment_status:"Pending",
//     Blacksmithid:localStorage.getItem("BlacksmithId"),
//     Orderid:Productid
//   }

//   return this.afs.collection("Product").add(payment);
// }
  updateProduct(Productid: string, product: any) {
    return this.afs.doc("Product/" + Productid).update(product);
  }
  getbookingBydate(catId: any, todate:any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Booking", (ref) => ref.where("Blacksmithid","==",localStorage.getItem("BlacksmithId")).where("Order_status","==","Delivered").where("Order_date",">=",todate).where("Order_date","<=",catId))
        .valueChanges({ idField: "Bookingid" })
        .subscribe(prodRes => {
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  getAllbookingBydate(catId: any, todate:any) {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Booking", (ref) => ref.where("Blacksmithid","==",localStorage.getItem("BlacksmithId")).where("Order_date",">=",todate).where("Order_date","<=",catId))
        .valueChanges({ idField: "Bookingid" })
        .subscribe(prodRes => {
          this.getProductList().subscribe(res => {
            prodRes.forEach(el => {
              el.Product_name = res.find(el1 => el1.id === el.Productid)?.Product_name
              
            })
            resolve(prodRes)
          })
          this.getCustomerList().subscribe(res => {
            prodRes.forEach(el => {
              el.Name = res.find(el1 => el1.id === el.Customerid)?.Name
              
            })
            resolve(prodRes)
          })
        })
    })

  }
  // getbookingBydate(catId: any, todate:any) {
  //   return this.afs.collection('Booking', (ref) =>
  //   ref.where("Blacksmithid","==",localStorage.getItem("BlacksmithId")).where("Order_status","==","Delivered").where("Order_date",">=",todate).where("Order_date","<=",catId))
  //   .valueChanges({ idField: "Bookingid" })
  //   }
    // getAllbookingBydate(catId: any, todate:any) {
    //   return this.afs.collection('Booking', (ref) =>
    //   ref.where("Blacksmithid","==",localStorage.getItem("BlacksmithId")).where("Order_date",">=",todate).where("Order_date","<=",catId))
    //   .valueChanges({ idField: "Bookingid" })
    //   }
}
