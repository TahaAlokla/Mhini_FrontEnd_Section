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
  private loginAdminUrl = "https://mhini-app.herokuapp.com/api/admin/login"
  private getAllUserUrl = "https://mhini-app.herokuapp.com/api/admin/getAllUser"
  private blockedUserUrl = "https://mhini-app.herokuapp.com/api/admin/blockedUserActivate"
  private unBlockedUserUrl = "https://mhini-app.herokuapp.com/api/admin/unBlockedUserActivate"
  private getAllServicesUrl = "https://mhini-app.herokuapp.com/api/admin/count"

  private serviceAddUrl = "https://mhini-app.herokuapp.com/api/admin/service/addservice"
  private getAllAdminsUrl = "https://mhini-app.herokuapp.com/api/admin/getAllAdmins"

  private addAdminUrl = "ggit/api/admin/addAdmin"
  private deleteAdminUrl = "https://mhini-app.herokuapp.com/api/admin/delete/"
  private getAllOrdersUrl = "https://mhini-app.herokuapp.com/api/admin/getAllOrders"
  private addQuestionUrl = "https://mhini-app.herokuapp.com/api/admin/addQ&A"
  private getAllQuestionUrl = "https://mhini-app.herokuapp.com/api/questions"
  private deleteQuestionUrl = "https://mhini-app.herokuapp.com/api/admin/deleteQ&A/"
  private getAllCitesUrl ="https://mhini-app.herokuapp.com/api/cites"


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
  // https://mhini-app.herokuapp.com/api/admin/deleteQ&A/:id

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
