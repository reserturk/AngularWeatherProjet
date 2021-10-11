import { AlertifyService } from './../services/aletify/alertify.service';
import { LoginTokenService } from './../services/auth/loginToken.service';

import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private lts:LoginTokenService,
    private alertifyService:AlertifyService,
    private router:Router
    ) { }


  
  ngOnInit() {

  }

get loggedIn(){
 
  return localStorage.getItem('token')
  
}

logOut(){
  this.lts.logOut();
  this.alertifyService.error("Çıkış Yapıldı.");
  this.router.navigateByUrl("login")
}
}
