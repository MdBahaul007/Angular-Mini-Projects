import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginDetail=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')


  });

  onClick(){
    console.table(this.loginDetail.value);
    this.loginDetail.reset();
  }

}
