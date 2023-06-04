import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }
  login(user: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.password)
        .then((res: any) => {
          resolve(true)
        }


        )
        .catch(err => {
          reject(err)
        })
    })
  }
  districtreg(categoryData: any) {
    const CategoryData = JSON.parse(JSON.stringify(categoryData));
    return this.afs.collection("District").add(CategoryData);
  }
  getdistrict() {
    return this.afs.collection("District", (ref) => ref.orderBy("District_name"))
      .valueChanges({ idField: "Districtid" })
  }
  getcustomer() {
    return this.afs.collection("Customer", (ref) => ref.orderBy("Name"))
      .valueChanges({ idField: "uid" })
  }
  getProduct() {
    return this.afs.collection("Product", (ref) => ref.orderBy("Product_name"))
      .valueChanges({ idField: "Productid" })
  }
  deletedist(Districtid: string) {
    return this.afs.doc("District/" + Districtid).delete();
  }
  getDistrictList() {
    return this.afs.collection<any>("District").snapshotChanges()
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
  getDistrictById(districtId: any) {
    const productData =
      this.afs.doc<any>("District/" + districtId).valueChanges();
    return productData;
  }
  updateDistrict(district_id: string, district: any) {
    return this.afs.doc("District/" + district_id).update(district);
  }
  locationreg(districtData: any) {
    const DistrictData = JSON.parse(JSON.stringify(districtData));
    return this.afs.collection("Location").add(DistrictData);
  }
  getlocation() {
    return this.afs.collection("Location", (ref) => ref.orderBy("Location_name"))
      .valueChanges({ idField: "Locationid" })
  }
  getAllLocation() {
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
        .collection<any>("Location", (ref) => ref.orderBy("Location_name"))
        .valueChanges({ idField: "Locationid" })
        .subscribe(prodRes => {
          this.getDistrictList().subscribe(res => {
            prodRes.forEach(el => {
              el.District_name = res.find(el1 => el1.id === el.Districtid)?.District_name
            })
            resolve(prodRes)
          })
        })
    })

  }
  deleteloca(Locationid: string) {
    return this.afs.doc("Location/" + Locationid).delete();
  }
  getLocationById(Locationid: any) {
    const productData =
      this.afs.doc<any>("Location/" + Locationid).valueChanges();
    return productData;
  }
  updateLocation(Locationid: string, Location: any) {
    return this.afs.doc("Location/" + Locationid).update(Location);
  }
  getlocationedit() {
    return this.afs.collection("Location", (ref) => ref.orderBy("Location_name"))
      .valueChanges({ idField: "Locationid" })
  }
  blacksmithreg(categoryData: any) {
    const CategoryData = JSON.parse(JSON.stringify(categoryData));
    return this.afs.collection("Blacksmith").add(CategoryData);
  }
  getblack() {
    return this.afs.collection("Blacksmith", (ref) => ref.orderBy("Blacksmith_name"))
      .valueChanges({ idField: "Blacksmithid" })
  }
  deleteblack(Blacksmithid: string) {
    return this.afs.doc("Blacksmith/" + Blacksmithid).delete();
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
  // getAllbookingBydate(catId: any, todate:any) {
  //   return this.afs.collection('Booking', (ref) =>
  //   ref.where("Order_date",">=",todate).where("Order_date","<=",catId))
  //   .valueChanges({ idField: "Bookingid" })
  //   }
    getAllbookingBydate(catId: any, todate:any) {
      return new Promise<any[]>((resolve, reject) => {
        const Product = this.afs
          .collection<any>("Booking", (ref) => ref.where("Order_date",">=",todate).where("Order_date","<=",catId))
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
}


