import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';

import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { DistrictComponent } from './admin/district/district.component';
import { LocationComponent } from './admin/location/location.component';
import { ProductComponent } from './admin/product/product.component';


import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { DistricteditComponent } from './admin/districtedit/districtedit.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { BlackmasterComponent } from './black/blackmaster/blackmaster.component';
import { BlackhomeComponent } from './black/blackhome/blackhome.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { UserindexComponent } from './user/userindex/userindex.component';
import { BlacksmithregComponent } from './admin/blacksmithreg/blacksmithreg.component';
import { BlacksmithloginComponent } from './guest/blacksmithlogin/blacksmithlogin.component';
import { ProfileComponent } from './black/profile/profile.component';
import { GalleryComponent } from './black/gallery/gallery.component';
import { BlacksmiviewComponent } from './admin/blacksmiview/blacksmiview.component';
import { GalleryregComponent } from './black/galleryreg/galleryreg.component';
import { ProductregComponent } from './black/productreg/productreg.component';
import { ProductviewComponent } from './black/productview/productview.component';
import { ProducteditComponent } from './black/productedit/productedit.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { BlacksmithviewComponent } from './user/blacksmithview/blacksmithview.component';

import { BlacksmithviewmoreComponent } from './user/blacksmithviewmore/blacksmithviewmore.component';
import { ProductbookingComponent } from './user/productbooking/productbooking.component';
import { PaymentComponent } from './user/payment/payment.component';
import { BookingconfirmedComponent } from './user/bookingconfirmed/bookingconfirmed.component';
import { DatePipe } from '@angular/common';
import { OrderviewComponent } from './black/orderview/orderview.component';
import { AllbookingComponent } from './black/allbooking/allbooking.component';
import { PaymentviewComponent } from './black/paymentview/paymentview.component';
import { DeliveryComponent } from './black/delivery/delivery.component';
import { UserorderviewComponent } from './user/userorderview/userorderview.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { OrderreportComponent } from './black/orderreport/orderreport.component';
import { BlackindexComponent } from './black/blackindex/blackindex.component';
import { AllorderreportComponent } from './black/allorderreport/allorderreport.component';
import { CustomerreportComponent } from './admin/customerreport/customerreport.component';
import { UsermasterComponent } from './user/usermaster/usermaster.component';
import { PaymentconfirmedComponent } from './user/paymentconfirmed/paymentconfirmed.component';
import { BookingreportComponent } from './admin/bookingreport/bookingreport.component';
import { ProductreportComponent } from './admin/productreport/productreport.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    GuesthomeComponent,
    AdminmasterComponent,
    GuestmasterComponent,
   
    AdminloginComponent,
        DistrictComponent,
        LocationComponent,
        ProductComponent,
  
        DistrictviewComponent,
        DistricteditComponent,
        LocationviewComponent,
        BlackmasterComponent,
        BlackhomeComponent,
        LocationeditComponent,
        UserindexComponent,
        BlacksmithregComponent,
        BlacksmithloginComponent,
        ProfileComponent,
        GalleryComponent,
        BlacksmiviewComponent,
        GalleryregComponent,
        ProductregComponent,
        ProductviewComponent,
        ProducteditComponent,
        UserprofileComponent,
        BlacksmithviewComponent,
       
        BlacksmithviewmoreComponent,
        ProductbookingComponent,
        PaymentComponent,
        BookingconfirmedComponent,
        OrderviewComponent,
        AllbookingComponent,
        PaymentviewComponent,
        DeliveryComponent,
        UserorderviewComponent,
        UserpaymentComponent,
        OrderreportComponent,
        BlackindexComponent,
        AllorderreportComponent,
        CustomerreportComponent,
        UsermasterComponent,
        PaymentconfirmedComponent,
        BookingreportComponent,
        ProductreportComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
