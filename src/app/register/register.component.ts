import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import swal from 'sweetalert';


class Centre{
  name:string
  pancard:string
  doctorName:string
  isarNo:string
  address:string
  landline:string
  email:string
}

class LoginInfo{
  username:string; password:string; cpassword:string;
}


@Component({
  selector: 'IVF-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private api:ServicesService) { }

  details = new Centre();
  logininfo = new LoginInfo();


  submited = false;

  ngOnInit() {
    this.details.address = "adgds"
    this.details.name = "adfsdg"
    this.details.pancard = "afadf"
    this.details.isarNo = "MP-65"
    this.details.landline = "3425"
    this.details.email = "afdf@afdsf.in"
    this.details.doctorName = "adgfs"
  }

  onSubmit(bool){
    
    this.submited = true;

    if(bool){
      console.log(this.details)
      // this.api.registerCentre(this.details).subscribe((res)=>{
      //   console.log(res)
      // })
      swal("Registeration Complete", "Please check your mail. Login information are sent to that mail", "success");
    }
  }
}
