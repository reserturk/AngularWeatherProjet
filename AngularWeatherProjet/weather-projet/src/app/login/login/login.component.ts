import { AlertifyService } from './../../services/aletify/alertify.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginTokenService } from 'src/app/services/auth/loginToken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(
    private lts:LoginTokenService,
    private router:Router,
    private alertifyService:AlertifyService
   ) { }

  ngOnInit() {
    
  }

  loginUser:any={}
login(form:NgForm){
  if (form.valid) {
    this.lts.login(this.loginUser);
    this.alertifyService.success("Sisteme giriş yapıldı");
    this.router.navigateByUrl('getServer');
  }
 
  
}

logOut(){
  this.lts.logOut();
}
 isAuthenticated(){
return this.lts.loggedIn();
} 

 
}
