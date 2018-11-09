import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  

  registerCentre(centredetails){
    
    var body = JSON.stringify(centredetails);
    console.log(body)
    var headerOptions = new HttpHeaders({ 'Content-Type':  'application/json'});
    
    return this.http.post("http://192.168.0.103:52970/api/ivf/xyuiasdfbjasdbjhv",body,{
      headers:headerOptions
    });
    // return this.http.post("http://localhost:52970/api/ivf/xyuiasdfbjasdbjhv",body,{
    //   headers:headerOptions
    // });
  }
//{"name":"akil","pancard":"nabf2783e","doctorName":"kjadf agdsfkh","isarNo":"MP-42","address":"svjk gkjasgbkb","landline":"098142756","email":"agbhsa@gsg.in"}
}
