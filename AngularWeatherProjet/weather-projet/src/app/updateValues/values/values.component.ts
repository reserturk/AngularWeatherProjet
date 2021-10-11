import { Values } from '../../models/values/values';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValuesService } from './../../services/valuesService/values.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  

  constructor(private valuesService:ValuesService, private httpClient:HttpClient) { }
  path="https://apistb.appivot.com/api/Values/";
  values!:Values;

  ngOnInit() {
    var reqHeader = new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   })
    
    this.httpClient.get<any>(this.path+localStorage.getItem('token')+"xYospFNcOnutOpFFKnWNn",  { headers: reqHeader })
        .subscribe((data:any) => {

          this.values = data.id
          console.log(JSON.stringify((this.values)))
        
        });
  }

}
