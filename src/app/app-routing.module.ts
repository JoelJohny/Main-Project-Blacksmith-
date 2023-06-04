import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { BlacksmithregComponent } from './admin/blacksmithreg/blacksmithreg.component';
import { BlacksmiviewComponent } from './admin/blacksmiview/blacksmiview.component';
import { BookingreportComponent } from './admin/bookingreport/bookingreport.component';
import { CustomerreportComponent } from './admin/customerreport/customerreport.component';
import { DistrictComponent } from './admin/district/district.component';
import { DistricteditComponent } from './admin/districtedit/districtedit.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { LocationComponent } from './admin/location/location.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductreportComponent } from './admin/productreport/productreport.component';
import { AllbookingComponent } from './black/allbooking/allbooking.component';
import { AllorderreportComponent } from './black/allorderreport/allorderreport.component';
import { BlackhomeComponent } from './black/blackhome/blackhome.component';
import { BlackindexComponent } from './black/blackindex/blackindex.component';
import { BlackmasterComponent } from './black/blackmaster/blackmaster.component';
import { DeliveryComponent } from './black/delivery/delivery.component';
import { GalleryComponent } from './black/gallery/gallery.component';
import { GalleryregComponent } from './black/galleryreg/galleryreg.component';
import { OrderreportComponent } from './black/orderreport/orderreport.component';
import { OrderviewComponent } from './black/orderview/orderview.component';
import { PaymentviewComponent } from './black/paymentview/paymentview.component';
import { ProducteditComponent } from './black/productedit/productedit.component';
import { ProductregComponent } from './black/productreg/productreg.component';
import { ProductviewComponent } from './black/productview/productview.component';
import { ProfileComponent } from './black/profile/profile.component';
import { BlacksmithloginComponent } from './guest/blacksmithlogin/blacksmithlogin.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { BlacksmithviewComponent } from './user/blacksmithview/blacksmithview.component';
import { BlacksmithviewmoreComponent } from './user/blacksmithviewmore/blacksmithviewmore.component';
import { BookingconfirmedComponent } from './user/bookingconfirmed/bookingconfirmed.component';
import { PaymentComponent } from './user/payment/payment.component';
import { PaymentconfirmedComponent } from './user/paymentconfirmed/paymentconfirmed.component';
import { ProductbookingComponent } from './user/productbooking/productbooking.component';

import { UserindexComponent } from './user/userindex/userindex.component';
import { UsermasterComponent } from './user/usermaster/usermaster.component';
import { UserorderviewComponent } from './user/userorderview/userorderview.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';


const routes: Routes = [
  {path:'',redirectTo:'/guestmaster/guesthome',pathMatch:'full'},
  {path:"guestmaster",component:GuestmasterComponent,
  children:[
    {path:"guesthome",component:GuesthomeComponent},
    
   
  ]},
  {path:"adminmaster",component:AdminmasterComponent,
  children:[
    {path:"adminhome",component:AdminhomeComponent},
    {path:"DistrictReg",component:DistrictComponent},
    {path:"Districtview",component:DistrictviewComponent},
    {path:"Districtedit/:id",component:DistricteditComponent},
    {path:"Locationreg",component:LocationComponent},
    {path:"Locationview",component:LocationviewComponent},
    {path:"Locationedit/:id",component:LocationeditComponent},
    {path:"Blacksmithreg",component:BlacksmithregComponent},
    {path:"Blacksmithview",component:BlacksmiviewComponent},
    {path:"Customerreport",component:CustomerreportComponent},
    {path:"Bookingreport",component:BookingreportComponent},
    {path:"Productreport",component:ProductreportComponent},
    
  ]},
  {path:"Blackmaster",component:BlackmasterComponent,
  
  children:[
    {path:"Blackhome",component:BlackhomeComponent},
    {path:"Gallery",component:GalleryComponent},
    {path:"Product",component:ProductComponent},
    {path:"Profile",component:ProfileComponent},
    {path:"Galleryreg",component:GalleryregComponent}, 
    {path:"Productred",component:ProductregComponent},
    {path:"Productview",component:ProductviewComponent},
    {path:"Productedit/:id",component:ProducteditComponent},
    {path:"orderview",component:OrderviewComponent},
    {path:"Paymentview",component:PaymentviewComponent},
    {path:"Allbooking",component:AllbookingComponent},
    {path:"Delivery",component:DeliveryComponent},
    {path:"Allorderreport",component:AllorderreportComponent},
    {path:"orderreport",component:OrderreportComponent},
    
  ]},
  
 
  {path:"adminlogin",component:AdminloginComponent},
  {path:"blacklogin",component:BlacksmithloginComponent},
 
  
  // {path:"Userindex",component:UserindexComponent},
  
  
 
  {path:"blackindex",component:BlackindexComponent},
  
  {path:"Userindex",component:UserindexComponent},

  {path:"UserMaster",component:UsermasterComponent,
  children:[
    {path:"Userorderview",component:UserorderviewComponent},
    {path:"Userprofile",component:UserprofileComponent},
    {path:"userpaymentview",component:UserpaymentComponent},
    {path:"bookingconfirm",component:BookingconfirmedComponent},
    {path:"Paymentconfirm",component:PaymentconfirmedComponent},
    {path:"payment/:id",component:PaymentComponent},
    {path:"blacksmithviewin",component:BlacksmithviewComponent},

  {path:"blacksmithviewmore/:id",component:BlacksmithviewmoreComponent},
  {path:"productbooking/:id",component:ProductbookingComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
