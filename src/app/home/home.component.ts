import { Component, OnInit } from '@angular/core';
declare var $ : any;

class LoginForm{
  username=""
  password=""
  submited = false
  
  showForm = false
  show(){this.showForm = true}
  hide(){
    this.showForm = false
    this.username = ""
    this.password = ""
    this.submited = false
  }
}

class RegForm{
  name = "dsgsg"
  pancard = "afadf"
  doctorName = "adgfs"
  isarNo = "MP-65"
  address = "adgds"
  landline = "3425"
  email = "afdf@afdsf.in"

  username = "asfaf"
  password = "gdhg"
  cpassword = "gdhg"


  stepOneSubmited = false
  showStepTwo = false
  isUserExist = false
  next(value){
    this.stepOneSubmited = true;
    if(value){
      this.showStepTwo = true
      debugger;
    }
  }

  
  submited = false

  showForm = false
  show(){this.showForm = true}
  hide(){
    this.showForm = false
    this.name = ""
    this.pancard = ""
    this.doctorName = ""
    this.isarNo = ""
    this.address = ""
    this.landline = ""
    this.email = ""

    this.username = ""
    this.password = ""
    this.cpassword = ""
    
    this.stepOneSubmited = false
    this.isUserExist = false
    this.showStepTwo = false
    this.submited = false
  }
}


@Component({
  selector: 'IVF-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  login = new LoginForm();
  reg = new RegForm();



  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    // $(window).on('load',function(){
    //   $('#exampleModal').modal('show');
    // });

  }

  onLoginFormSubmit(isvalid){
    this.login.submited = true;
  }
  onRegFormSubmit(isvalid){
    this.reg.submited = true;

    if(isvalid){
      swal("Registeration complete", "Please click on login button and access your account" , "success")
      this.reg.hide()
    }
  }

}
