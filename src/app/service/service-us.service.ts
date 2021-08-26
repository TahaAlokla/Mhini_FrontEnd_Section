import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsService {

  private ErrorHandler: ErrorHandler = new ErrorHandler()
  private getAllServiceUsUrl = "http://localhost:3000/api/service/viewServices"
  private deleteServiceUsUrl="http://localhost:3000/api/admin/deleteService/"
  constructor(private http: HttpClient) { }

  getAllServicesUs(): Observable<any>  {

      return this.http.get<any>(this.getAllServiceUsUrl)



  }

  deleteServiceUs(ServiceId:String):Observable<any>|void{
    let urlServiceUsId = `${this.deleteServiceUsUrl}/${ServiceId}`
    try{
      return this.http.delete<any>(urlServiceUsId)
    }catch(err){
      this.ErrorHandler.handleError(err)
    }
  }
}
