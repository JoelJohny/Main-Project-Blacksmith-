import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { exit } from 'process';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  appUser$;
  userlist: any[] = []
  constructor(public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private user:UserService) {
    this.appUser$ = this.afAuth.authState
  }
  login() {
    const returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || this.router.url;
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (res: any) => {
        console.log(res);
        console.log(res.additionalUserInfo.profile.email);
        const userDetails = {
          uid: res.user.uid,
          Email: res.additionalUserInfo.profile.email,
          Name: res.additionalUserInfo.profile.name,
        }
        this.user.getUserById(userDetails.uid)
      .subscribe(res => {
        console.log(res)
        this.userlist = res;
      
      if(this.userlist.length < 0){
        this.afs.doc(`Customer/${userDetails.uid}`)
          .set(userDetails)
          .then(res => {
            console.log(res)
            localStorage.setItem('userId',(userDetails.uid));
            console.log("11")
            this.router.navigate(['/Userindex']);
         
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })}
          else{
            localStorage.setItem('userId',(userDetails.uid));
            console.log("11")
            this.router.navigate(['/Userindex']);
          
            
          }
        })
      })
  }
  
  
  ProviderLogin(data1: any){ 
    console.log(data1.Lemail)
    return this.afs.collection('Blacksmith', (ref) => ref.where("Email","==", 
    data1.Email )
    .where("Password","==",data1.Password) )
    .valueChanges({ idField: "BlacksmithId" })
    
   

   


}
}
  function reject(err:any) {
    throw new Error('Function not implemented.');
  }

