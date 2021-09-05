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
  private loginAdminUrl = "http://localhost:3000/api/admin/login"
  private getAllUserUrl = "http://localhost:3000/api/admin/getAllUser"
  private blockedUserUrl = "http://localhost:3000/api/admin/blockedUserActivate"
  private unBlockedUserUrl = "http://localhost:3000/api/admin/unBlockedUserActivate"
  private getAllServicesUrl = "http://localhost:3000/api/admin/count"

  private serviceAddUrl = "http://localhost:3000/api/admin/service/addservice"
  private getAllAdminsUrl = "http://localhost:3000/api/admin/getAllAdmins"

  private addAdminUrl = "http://localhost:3000/api/admin/addAdmin"
  private deleteAdminUrl = "http://localhost:3000/api/admin/delete/"

  private getAllOrdersUrl = "http://localhost:3000/api/admin/getAllOrders"
  private addQuestionUrl = "http://localhost:3000/api/admin/addQ&A"
  private getAllQuestionUrl = "http://localhost:3000/api/questions"
  private deleteQuestionUrl = "http://localhost:3000/api/admin/deleteQ&A/"
  private getAllCitesUrl ="http://localhost:3000/api/cites"


  constructor(private http: HttpClient, private tokenStorge: TokenStorageService) { }



  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  loginAdmin(phoneNumber: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginAdminUrl, {
      phoneNumber,
      password
    });
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.getAllUserUrl)
  }

  getAllCites(): Observable<any> {
    return this.http.get(this.getAllCitesUrl)
  }

  getAllServices(): Observable<any> {
    return this.http.get(this.getAllServicesUrl)
  }
  getAllOrders(): Observable<any> {
    return this.http.get(this.getAllOrdersUrl)
  }

  getAllQuestion(): Observable<any> {
    return this.http.get(this.getAllQuestionUrl)
  }

  addService(formData: any): Observable<any> {
    return this.http.post<any>(this.serviceAddUrl, formData)
  }
  // /deleteQ&A/:id
  // http://localhost:3000/api/admin/deleteQ&A/:id

  addQuestionAndAnswer(Question: any, Answer: any): Observable<any> {
    return this.http.post(this.addQuestionUrl, {
      Question,
      Answer
    })
  }



  // for test if user login
  isLoggedInAdmin(): boolean {
    console.log(' admin login isAdmin login guard ', (this.tokenStorge.getAdmin().typeUser === "admin"));


    //  return !! this.tokenStorge.getToken()
    // typeUser: "admin"
    return !!
      (this.tokenStorge.getToken()) && (this.tokenStorge.getAdmin().typeUser === "admin")

    // this.tokenStorge.getUser()
    // localStorage.getItem(TOKEN_KEY)
  }

  blockedUser(phoneNumber: any): Observable<any> {
    return this.http.post(this.blockedUserUrl, { phoneNumber })

  }
  //  unBlokedUser
  unBlockedUser(phoneNumber: any): Observable<any> {
    return this.http.post(this.unBlockedUserUrl, { phoneNumber })
  }

  getAllAdmins(): Observable<any> {
    return this.http.get(this.getAllAdminsUrl)
  }

  addAdmin(adminName: any, phoneNumber: any, adminPrivilege: any, password: any): Observable<any> {
    return this.http.post(this.addAdminUrl, { adminName, phoneNumber, adminPrivilege, password })
  }

  deleteAdmin(idAdmin: String): Observable<any> {
    // console.log(' admin delete service :', idAdmin);
    return this.http.delete<any>(this.deleteAdminUrl + `${idAdmin}`)
  }

  deleteQuestion(idQuestion:String):Observable<any> {
    return this.http.delete<any>(this.deleteQuestionUrl + `${idQuestion}`)
  }
}
