import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesService } from "../../../services.service";

@Component({
  selector: 'IVF-ivfcentres',
  templateUrl: './ivfcentres.component.html',
  styleUrls: ['./ivfcentres.component.scss']
})
export class IvfcentresComponent implements OnInit {

  constructor(private api:ServicesService) { }
  @Output() loader = new EventEmitter();

  centres= []

  
  pagination = []
  page = 0
  showing = []
  

  //Search
  searchData= []
  name = ""
  doctorname = ""
  isarno = ""
  
  total = 0

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.api.getAllCentres().subscribe(results=>{
      if(results.status){
        this.centres = results.data
        this.showData() 
      }
      else{
        swal("Server Problem", "Something went wrong on fetching all the centre details. Please try again later","error")
      }
      this.loader.emit(false)
    })
  }

  showData(){
    this.page = 0
    this.pagination = [];
    let tempData = [].concat(this.centres)
    while (tempData.length)this.pagination.push(tempData.splice(0, 10))

    this.showing = this.pagination[this.page]
    this.total = this.centres.length
  }

  next(){
    this.page++;
    this.showing = this.pagination[this.page]
    this.total = this.showing.length
  }
  previous(){
    this.page--;
    this.showing = this.pagination[this.page]
    this.total = this.showing.length
  }

  search(){

    if(this.name=="" && this.doctorname=="" && this.isarno==""){
      alert("type any")
      return
    }

    this.searchData = [].concat(this.centres)
    this.page = 0

    this.pagination = [];
    let tempData = [].concat(this.centres)


    tempData = tempData.filter(data=>{
      let returnv = false
      if(this.name!="") returnv = returnv || data.name.toLowerCase().indexOf(this.name) > -1
      if(this.name!="") returnv = returnv || data.name.toLowerCase().indexOf(this.name) > -1
      if(this.name!="") returnv = returnv || data.name.toLowerCase().indexOf(this.name) > -1
      return returnv
    })

    this.total = tempData.length
    
    while (tempData.length)this.pagination.push(tempData.splice(0, 10))
    this.showing = this.pagination[this.page]
   
  }
  clear(){
    this.showData()
    this.name = ""
    this.doctorname = ""
    this.isarno=""
  }

}
