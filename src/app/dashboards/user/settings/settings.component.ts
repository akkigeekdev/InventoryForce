import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Centre } from 'src/app/model/IVF';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'IVF-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private api:ServicesService
  ) { }
  @Output() loader = new EventEmitter();

  username
  details = new Centre()
  submited = false
  
  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
    this.loader.emit(true)
    
    this.username = localStorage.getItem("ivfusername")
    if(this.username){
      this.api.getCenter(this.username).subscribe(result=>{
        if(result.status && result.data.length>0){
          this.details = result.data[0]
          this.loader.emit(false)
        }
      })
    }
  }

  onSubmit(isvalid){
    this.submited = true

    if(isvalid){
      this.loader.emit(true)
    
      this.api.updateCentre(this.username, this.details).subscribe(result=>{
        if(result.status){
          swal("Success", "Your profile is updated","success")
          this.loader.emit(false)
        }
        else{
          swal("Failed","Please try again later","error")
          console.log(result.error)
        }
      })
    }
  }
}
