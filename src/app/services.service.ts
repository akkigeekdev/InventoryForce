import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

class Result{
  status:boolean; data: any; error:string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  headerOptions = new HttpHeaders({ 'Content-Type':  'application/json'});

  hosturl = "http://192.168.0.103:52970/api/ivf"
  
  getCenter(username:string){
    return this.http.get<Result>(`${this.hosturl}/centres/${username}`)
  }

  getAllCentres(){
    return this.http.get<Result>(`${this.hosturl}/centres`)
  }

  updateCentre(username, detail){

    return this.http.put<Result>(`${this.hosturl}/centres/${username}`,detail,{
      headers:this.headerOptions
    })
  }


  registerCentre(authdetail, detail){
    
    return this.http.post<Result>("${this.hosturl}/centres/register",{
      centre:detail,
      auth : authdetail
    },{
      headers:this.headerOptions
    });
  }

  login(username,password){
    return this.http.post<Result>("${this.hosturl}/user/authenticate",{
      username,password
    },{
      headers:this.headerOptions
    });
  }
  
}
