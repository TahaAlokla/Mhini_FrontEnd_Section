import { TokenStorageService } from './token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = '';
@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private registerUserUrl = "https://mhini-app.herokuapp.com/api/user/register"
  private loginUserUrl = "https://mhini-app.herokuapp.com/api/user/login"
  private getUserUrl = "https://mhini-app.herokuapp.com/api/user/getUser"
  private getAllUserUrl = "https://mhini-app.herokuapp.com/api/user/getAllUser"
  private deleteUserUrl="https://mhini-app.herokuapp.com/api/user/delete/"
  private registerWorkerUrl="https://mhini-app.herokuapp.com/api/worker/register"
  private deleteWorkerUrl="https://mhini-app.herokuapp.com/api/worker/delete/"
  private citesAvailableUrl="https://mhini-app.herokuapp.com/api/cites"
  private searchWorkerUrl ="https://mhini-app.herokuapp.com/api/user/searchWorker"
  private addOrderWorkerUrl ="https://mhini-app.herokuapp.com/api/user/addOrder"
  private getOrderStatusPendingUrl= "https://mhini-app.herokuapp.com/api/user/getOrderStatusPending"
  private GetAllOrderStatusUrl= "https://mhini-app.herokuapp.com/api/user/GetAllOrderStatus"


  constructor(private http: HttpClient , private tokenStorge:TokenStorageService) { }

  //  login user
  loginUser(phoneNumber: string, password: string): Observable<any> {

    // console.log("test login observable fun !", phoneNumber,
    //   password);

    return this.http.post<any>(this.loginUserUrl, {
      phoneNumber,
      password
    });
  }




  registerUser(username: string, phoneNumber: string, password: string, city: String): Observable<any> {
    return this.http.post(this.registerUserUrl, {
      username,
      phoneNumber,
      password,
      city
    }, httpOptions);
  }

  registerWorker(WorkerData:any): Observable<any>{
    console.log(WorkerData);
    return this.http.post(this.registerWorkerUrl,WorkerData)
  }


  // for test if user login
  isLoggedIn(): boolean {

     return !! this.tokenStorge.getToken()
    // return !!
      // (this.tokenStorge.getToken()) && (this.tokenStorge.getUser().userData.typeUser==="client")

  //  this.tokenStorge.getUser()
    // localStorage.getItem(TOKEN_KEY)
  }

  isLoggedInWorker(): boolean {

    // return !! this.tokenStorge.getToken()
    return !!
      (this.tokenStorge.getToken()) && (this.tokenStorge.getUser().userData.typeUser==="worker")

  //  this.tokenStorge.getUser()
    // localStorage.getItem(TOKEN_KEY)
  }



  deleteUser(idUser:String): Observable<any>{

   return this.http.delete<any>(this.deleteUserUrl+`${idUser}`)

  }


  deleteWorker(idUser:String): Observable<any>{

    return this.http.delete<any>(this.deleteWorkerUrl+`${idUser}`)

   }

 getAllCitesAvailable():Observable<any>{
     return this.http.get(this.citesAvailableUrl)
   }


   searchWorkerService(city:any, serviceProvider:any):Observable<any>{
    //  console.log("SearchWorkerData fun service user", SearchWorkerData);

     return this.http.post(this.searchWorkerUrl,{
      city,
      serviceProvider
    }, httpOptions)

   }

   addOrderWorkerRequest(IdClient:any, IdWorker:any,serviceName:String ,massageFromUser:String):Observable<any>{
     return this.http.post<any>(this.addOrderWorkerUrl,{
      IdClient,
      IdWorker,
      serviceName,
      massageFromUser}
       , httpOptions
       )
   }

   getOrderStatusPending(IdClient:any):Observable<any>{
     return this.http.post<any>(this.getOrderStatusPendingUrl,{IdClient} , httpOptions )
   }

   getAllOrderStatus(IdForClient:any):Observable<any>{
     return this.http.post(this.GetAllOrderStatusUrl,{IdForClient}, httpOptions)
   }
  }
