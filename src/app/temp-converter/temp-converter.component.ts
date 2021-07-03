import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {
  tempratureConverter:FormGroup
  result:any


  constructor() { }

  ngOnInit(): void {
    this.tempratureConverter= new FormGroup({
      cel:new FormControl(''),
      feren:new FormControl('')

    });



  }
  celToFeren(data:any){
    console.log(data);
    this.result=data.cel*9/5+32;
    //we c to f conversion hai tau hm F wle dibbe me upr wali value dalaigai tabhi niche wli line hai
    this.tempratureConverter.controls.feren.setValue(this.result)

  }
  ferenToCel(data:any){
    console.log(data)
    this.result=(data.feren-32)*5/9;
    this.tempratureConverter.controls.cel.setValue(this.result);

  }





}


