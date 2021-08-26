import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private AdminService: AdminService , private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

    if(this.AdminService.isLoggedInAdmin()){
      return true
    }else{
      this.router.navigate(['/admin/loginAdmin'],{
        queryParams:{
          returnUrl: state.url
        }
      })
      return false
    }
  }

}
