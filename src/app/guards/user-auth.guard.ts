import { AuthUserService } from './../service/auth-user.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private UserService: AuthUserService , private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(this.UserService.isLoggedIn()){
        return true
      }else{
        this.router.navigate(['/user/loginUser'],{
          queryParams:{
            returnUrl: state.url
          }
        })
        return false
      }
  }

}
