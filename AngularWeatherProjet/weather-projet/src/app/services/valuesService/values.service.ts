import { Values } from '../../models/values/values';
import { Router } from '@angular/router';
import { AlertifyService } from './../aletify/alertify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

constructor(private httpClient:HttpClient,private alertifyService:AlertifyService,private router:Router) { }

path='https://apistb.appivot.com/api/Values/jGFhb5sSKXlw-4PoNlNaq/{"Id":"7rcpW7RIc9kkOh2O-0vNJ"}';
values!:Values
data:any;
valuesUpdate(){
  var reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
 });
 this.httpClient.put(this.path.toString(), { headers: reqHeader }).subscribe((data:any)=>{
  this.data=JSON.stringify(data)
  data[0].data[0].Name="abc"
  console.log(this.data)
})
}

}
