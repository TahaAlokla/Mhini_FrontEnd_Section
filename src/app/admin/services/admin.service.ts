import { AdminModule } from './../modules/admin/admin.module';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

   providedIn: 'root'
  // providedIn: AdminModule
})
export class AdminService {
  private loginAdminUrl="http://localhost:3000/api/admin/login"


  constructor(private http: HttpClient , private tokenStorge:TokenStorageService) { }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  loginAdmin(phoneNumber: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginAdminUrl, {
      phoneNumber,
      password
    });
  }



   // for test if user login
   isLoggedInAdmin(): boolean {
     console.log(' admin login isAdmin login guard ', (this.tokenStorge.getAdmin().typeUser==="admin"));


    //  return !! this.tokenStorge.getToken()
    // typeUser: "admin"
    return !!
     (this.tokenStorge.getToken()) && (this.tokenStorge.getAdmin().typeUser==="admin")

   // this.tokenStorge.getUser()
   // localStorage.getItem(TOKEN_KEY)
 }
}
