import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

class Centre{
  name:string
  pancard:string
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

  constructor(private api:ServicesService) { }

  details = new Centre();
  submited = false;

  ngOnInit() {}

  onSubmit(bool){
    
    this.submited = true;

    if(bool){
      console.log(this.details)
      this.api.registerCentre(this.details).subscribe((res)=>{
        console.log(res)
      })
    }
  }
}
