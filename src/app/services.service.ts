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

  
  getCenter(username:string){
    return this.http.get<Result>(`http://192.168.0.103:52970/api/ivf/centres/${username}`)
  }

  getAllCentres(){
    return this.http.get<Result>(`http://192.168.0.103:52970/api/ivf/centres`)
  }

  registerCentre(authdetail, detail){
    
    return this.http.post<Result>("http://192.168.0.103:52970/api/ivf/centres/register",{
      centre:detail,
      auth : authdetail
    },{
      headers:this.headerOptions
    });
  }

  login(username,password){
    return this.http.post<Result>("http://192.168.0.103:52970/api/ivf/user/authenticate",{
      username,password
    },{
      headers:this.headerOptions
    });
  }
  
}
