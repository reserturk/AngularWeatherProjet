import { Router } from '@angular/router';
import { LoginUser } from './../../models/loginUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../aletify/alertify.service';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginTokenService {

constructor(private httpClient:HttpClient,private router:Router,private alertifyService:AlertifyService) { }
path="https://apistb.appivot.com/api/Auth/"
userToken:any;
decodedToken:any;
jwtHelper:JwtHelperService = new JwtHelperService();
TOKEN_KEY="token"
data:any;
login(loginUser:LoginUser){
  let headers=new HttpHeaders();
  headers = headers.append('Content-Type','application/json');

  this.httpClient.post(this.path+"login",loginUser).subscribe((data:any)=>{
    this.saveToken(data.token.token);
    this.userToken=JSON.stringify(data.token.token)
    console.log(JSON.stringify(this.userToken))
    this.data=data
    this.decodedToken= this.jwtHelper.decodeToken(data.toString());
   
  });
}


saveToken(token: any ){
  localStorage.setItem(this.TOKEN_KEY,token)
}

logOut(){
  localStorage.removeItem(this.TOKEN_KEY)
}

loggedIn(){
  this.jwtHelper.isTokenExpired(this.TOKEN_KEY)

}

get token(){
  return localStorage.getItem(this.TOKEN_KEY)?.toString()
}

gerCurrentUserId(){
  return this.jwtHelper.decodeToken(this.token).token
}
}
