import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  

  registerCentre(centredetails){
    
    var body = JSON.stringify(centredetails);
    var headerOptions = new HttpHeaders({ 'Content-Type':  'application/json'});
    
    return this.http.post("http://localhost:52970/api/ivf/xyuiasdfbjasdbjhv",body,{
      headers:headerOptions
    });
  }

}
