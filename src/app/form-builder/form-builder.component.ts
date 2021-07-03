import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  userLoginCredits=this.formBuilder.group({
    name1:['',Validators.required],
    email1:[''],
    password1:['']
  })

  onClick(){
    console.table(this.userLoginCredits.value)
    this.userLoginCredits.reset();
  }

}
