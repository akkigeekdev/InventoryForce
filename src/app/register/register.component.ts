import { Component, OnInit } from '@angular/core';

class RegisterDetails{
  centreName:string
  panno:string
  doctorName:string
  isarNo:string
  address:string
  landline:string
  email:string
}


@Component({
  selector: 'IVF-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  details = new RegisterDetails();
  formValidated = false;

  ngOnInit() {}

  register(bool){
    this.formValidated = true;
    if(bool){
      console.log(this.details)
    }
  }
}
