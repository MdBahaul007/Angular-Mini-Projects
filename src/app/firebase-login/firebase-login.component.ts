import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.component.html',
  styleUrls: ['./firebase-login.component.css']
})
export class FirebaseLoginComponent implements OnInit {
  nt

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }
  loginElement=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });

  login(){
    // console.log(this.loginElement.value.email);
    // console.log(this.loginElement.value.password);

    this.auth.signInWithEmailAndPassword(this.loginElement.value.email,this.loginElement.value.password).catch((err)=>{
      console.log(err);
      console.log("Password or email not matched or no user found");
    })
    .then((res)=>{
      console.log(res);

      this.router.navigateByUrl('/dummyPage',{replaceUrl:true});
      console.log("Successfully Sign In")

    })
  }

}
