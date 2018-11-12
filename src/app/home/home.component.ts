import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import { Router } from '@angular/router';

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

class RegAuthForm{
  username = "akill"
  usernameExist = false;
  password = "akil1"
  cpassword = "akil1"
  submited = false;
  showForm =  false;
  show(){ this.showForm = true}
  hide(){
    this.showForm = false
  }
  clear(){
    this.username="";this.password="";this.cpassword="";this.submited=false;this.showForm=false;this.usernameExist=false;

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
  
  submited = false

  showForm = false
  show(){this.showForm = true}
  hide(){
    this.showForm = false
    // this.name = ""
    // this.pancard = ""
    // this.doctorName = ""
    // this.isarNo = ""
    // this.address = ""
    // this.landline = ""
    // this.email = ""
    this.submited = false
  }
}


@Component({
  selector: 'IVF-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api:ServicesService,
    private route: Router
    ) { }

  login = new LoginForm();
  regauth = new RegAuthForm();
  reg = new RegForm();
  

  regAuthFormLoading = false;
  loginFormLoading = false;

  ngOnInit() {
    // $(window).on('load',function(){
    //   $('#exampleModal').modal('show');
    // });
  }

  onRegAuthFormSubmit(isvalid){
    this.regauth.submited = true;
    if(isvalid){
      this.regAuthFormLoading = true;
      this.api.getCenter(this.regauth.username).subscribe(results=>{
        if(results.status){
          //let userdata = JSON.parse(results.data)
          if(results.data.length > 0){
            this.regauth.usernameExist = true
          }
          else{
            this.regauth.hide();
            this.reg.show();
          }
        }
        else{
          swal("Error", "something went wrong. Please try again later." , "error")
        }
        this.regAuthFormLoading = false;
      })
    }
  }

  onLoginFormSubmit(isvalid){
    this.login.submited = true;
    if(isvalid){
      this.loginFormLoading = true

      this.api.login(this.login.username, this.login.password).subscribe(results=>{
        if(results.status){
          let data = JSON.parse(results.data) || []

          if(data.length > 0){

            if(data[0].DESG == "admin"){
              this.route.navigate(["/admin/home","ivfCentres"])
            }
            else{
              this.route.navigate(["/ivf/home","new"])
            }
            localStorage.setItem("ivfusername",data[0].USERNAME)
            this.login.hide()
          }
          else{
            swal("Failed","Please check username and password","warning")
          }
        }
        else{
          swal("Failed","","error")
        }
        this.loginFormLoading = false
      })
    }
  }

  onRegFormSubmit(isvalid){
    this.reg.submited = true;

    if(isvalid){
      this.api.registerCentre(this.regauth, this.reg).subscribe(result=>{
        if(result.status){
          swal("Registeration complete", "Please click on login button and access your account" , "success")
        }
        else{
          swal("Error","Something went wrong. Please try agian later","error")
        }
      })
      this.reg.hide()
    }
  }
}
