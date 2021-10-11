
import { ServerList } from './../../models/serverCustomer/serverList';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginTokenService } from './../../services/auth/loginToken.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { Server } from 'src/app/models/serverCustomer/server';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-userServer',
  templateUrl: './userServer.component.html',
  styleUrls: ['./userServer.component.css']
})
export class UserServerComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  path = new URL('https://apistb.appivot.com/api/Values/jGFhb5sSKXlw-4PoNlNaq/')

  userIdUrl = '{"Id":"7rcpW7RIc9kkOh2O-0vNJ"}'


  ngOnInit() {
   
this.getServerById()

  }
  
 
  serverList!:any

  getServerById(){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.httpClient.get<ServerList>(this.path+this.userIdUrl,{headers:reqHeader}).subscribe((data:any)=>{
      this.serverList=data
      console.log(this.serverList)
    })

  }
    
}




    

  




//  updateServer(){
//   var reqHeader = new HttpHeaders({ 
//   'Content-Type': 'application/json',
//        'Authorization': 'Bearer ' + localStorage.getItem('token')
//    });
//   this.httpClient.get(this.path+this.updateServerPost, { headers: reqHeader }).subscribe((data:any)=>{
//   this.test=JSON.stringify(data.Server[0])
//   data.Server[0].id="vgK7T2jfoNby3scg27pDs"
//    data.Server[0].data[0].Id="asdasfasfa"
//    data.Server[0].data[0].Status="online"
//    data.Server[0].data[0].Applications.json="örnek"
//    data.Server[0].data[0].CloudOnPremise="Cloud"
//   data.Server[0].data[0].IpAddress="192.168.1.1"
//   data.Server[0].data[0].Name="NewServer"

//   })

//   }


