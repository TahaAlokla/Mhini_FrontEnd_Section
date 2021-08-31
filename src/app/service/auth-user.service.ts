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

  private registerUserUrl = "http://localhost:3000/api/user/register"
  private loginUserUrl = "http://localhost:3000/api/user/login"
  private getUserUrl = "http://localhost:3000/api/user/getUser"
  private getAllUserUrl = "http://localhost:3000/api/user/getAllUser"
  private deleteUserUrl="http://localhost:3000/api/user/delete/"
  private registerWorkerUrl="http://localhost:3000/api/worker/register"
  private deleteWorkerUrl="http://localhost:3000/api/worker/delete/"
  private citesAvailableUrl="http://localhost:3000/api/cites"
  private searchWorkerUrl ="http://localhost:3000/api/user/searchWorker"
  private addOrderWorkerUrl ="http://localhost:3000/api/user/addOrder"
  private getOrderStatusPendingUrl= "http://localhost:3000/api/user/getOrderStatusPending"
  private GetAllOrderStatusUrl= "http://localhost:3000/api/user/GetAllOrderStatus"


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
