import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Centre, Auth } from 'src/app/model/IVF';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'IVF-add-ivf',
  templateUrl: './add-ivf.component.html',
  styleUrls: ['./add-ivf.component.scss']
})
export class AddIVFComponent implements OnInit {

  constructor(
    private api:ServicesService
  ) { }
  @Output() loader = new EventEmitter();

  details = new Centre()
  auth = new Auth()
  cpassword = ""

  userexist = false

  submited = false

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.loader.emit(false)
  }

  onSubmit(isvalid){
    this.trimAll()
    this.submited = true

    if(isvalid){
      this.loader.emit(true)
      //check username exist
      this.api.getCenter(this.auth.username).subscribe(result=>{
        if(result.status){
          if(result.data.length > 0){
            this.userexist = true
          }
          else{
            this.register()
          }
        }
        else{
          swal("Failed", "Please try again later", "error")
        }
        this.loader.emit(false)
      })
    }
  }

  register(){
    this.loader.emit(true)
    this.api.registerCentre(this.auth, this.details).subscribe(result=>{
      if(result.status){
        swal("Registered","IVF centre added successfully","success")
        this.clear()
      }
      else{
        swal("Failed", "Please try again later", "error")
      }
      this.loader.emit(false)
    })
  }

  trimAll(){
    this.auth.username.trim()
    this.auth.password.trim()
    this.cpassword.trim()
    this.details.name.trim()
    this.details.pan.trim()
    this.details.doctorname.trim()
    this.details.isarno.trim()
    this.details.email.trim()
    this.details.address.trim()
  }

  clear(){
    this.details = new Centre();
    this.auth = new Auth();
    this.userexist = false
    this.cpassword = ""
    this.submited = false
  }
}
