import { Values } from './../../models/values/values';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serverPost',
  templateUrl: './serverPost.component.html',
  styleUrls: ['./serverPost.component.css']
})
export class ServerPostComponent implements OnInit {
  serverPostGroup!:FormGroup
  
  path = new URL('https://apistb.appivot.com/api/Values/')

  IdUrl = '{"id":"vgK7T2jfoNby3scg27pDs"}'
  

  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit() {
     this.createServerPost()
   
  }



  createServerPost(){
   this.serverPostGroup=this.formBuilder.group({
  id:this.jsonData
    
  })
     
  
 }
 Message!:any
 success!:any
 jsonData={
  "id": "vgK7T2jfoNby3scg27pDs",
  "data": {
      "Id":"xYospFNcOnutOpFFKnWNn",
      "Status":"Online",
      "Applications":{"json":"örnek"},
      "CloudOnPremise":"Cloud",
      "IpAddress":"192.168.1.1",
      "Name":"NewServer"
  }
}

  add(){
    
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
      this.httpClient.post(this.path.toString(),this.jsonData,{headers:reqHeader}).subscribe((data:any)=>{
        console.log(data)
        this.Message=data.Api_Result.State
        this.success=data.Api_Result.Success
        console.log(this.jsonData)
      })
    
    }
  

}
