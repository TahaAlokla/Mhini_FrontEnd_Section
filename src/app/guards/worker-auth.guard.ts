import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../service/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerAuthGuard implements CanActivate {
  constructor(private UserService: AuthUserService , private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(this.UserService.isLoggedInWorker()){
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
