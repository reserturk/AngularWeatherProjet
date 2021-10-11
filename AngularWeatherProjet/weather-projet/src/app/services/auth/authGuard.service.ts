import { LoginTokenService } from './loginToken.service';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

constructor(private router:Router,private loginTokenService:LoginTokenService) { }
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  if(!this.loginTokenService.loggedIn){
    
    this.router.navigateByUrl('/login');
    return false;
  }
  return true;
}
}
