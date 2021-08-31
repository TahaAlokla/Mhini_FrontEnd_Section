import { TokenStorageService } from './../../../service/token-storage.service';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { ServiceUsService } from 'src/app/service/service-us.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-search-worker',
  templateUrl: './search-worker.component.html',
  styleUrls: ['./search-worker.component.scss']
})
export class SearchWorkerComponent implements OnInit {
  MassageError:string=''
  MassageResult:String=''
  lengthResult:number=0
  workersResult:any
  idClient:String=''
  ServiceName:String=''
  addOrderRequestStatus:Boolean= false
  OrderStatus:String=""
  isSuccessSearch:boolean=false
  citesWorker: any
  serviceData:any
  servicesProviderWorker: any
  result:any
  IsLoginUser:Boolean=false
  massageFormUser = new FormControl('')
  form: any = {
    city: null,
    JobWorker: null,

  };

  constructor(private AuthUserService: AuthUserService , private serviceUs: ServiceUsService , private TokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // * check if user login
   this.IsLoginUser= this.AuthUserService.isLoggedIn()
   console.log("this.IsLoginUser", this.IsLoginUser);

    // * get id client
   this.idClient= this.TokenStorageService.getUser().userData._id

    // get workrsId for This Client Id For that Request order Status Pending
    this.AuthUserService.getOrderStatusPending(this.idClient).subscribe(result=>{
      console.log("get order pending ",result);

      this.workersId= result.IdWorkers.map((item :any) =>item.IdWorker )
      console.log("workersId :" ,this.workersId);




    })


   this.workersId=[]
   console.log("id client ", this.idClient);

    //* get All cites
    this.AuthUserService.getAllCitesAvailable().subscribe(data => {
      console.log('cites available', data.citesArray);
      this.citesWorker = data.citesArray
    }, err => {
      console.log(err);
    }
    )
    // * get all service worker provider

    this.serviceUs.getAllServicesUs().subscribe(data => {
      this.servicesProviderWorker = data.services
      console.log(data);
      this.result = this.servicesProviderWorker


      console.log(this.servicesProviderWorker, this.result);

    }, err => {
      console.log(err);
    },
    )

  }

  onSubmit(){
    // console.log(this.form.JobWorker);
    const formData = new FormData()

    const {
      city,
      JobWorker,

    } = this.form;
    // Note : append work if using multer only
    // for that not working here
    formData.append("city", city)
    console.log(this.form.city);

    // formData.append("service", JobWorker)
    // console.log(formData , "search worker component ");
    // JobWorker : Service name
    this.ServiceName = JobWorker
    this.AuthUserService.searchWorkerService(city, JobWorker).subscribe(result => {
      this.isSuccessSearch=true
      this.lengthResult= result.length
      console.log(result , " result search worker service ");
      this.MassageResult = result.massage
      this.workersResult= result.workers
    }, err => {

      // this.errorMessage = err.error.massage || err.error.errorsValidation;
      this.MassageError=err.error.massage

      console.log(this.MassageError);
      // console.log(this.errorMessage);
    })


  }
//  add request massage order
 addWorkerServiceToOrder(idWorker:any , massageFromUser:any){
 console.log(massageFromUser ,'massageFromUser');


    this.AuthUserService.addOrderWorkerRequest(this.idClient,idWorker,this.ServiceName ,massageFromUser).subscribe(result=>{
      this.addOrderRequestStatus=true
   this.OrderStatus= result.OrderData.OrderStatus
   this.workersId.push(idWorker)
      console.log(result);


    }, err => {
      console.log(err);
    })


  }

  workersId:any
  getStatus(idWorker:any){
    return this.workersId.includes(idWorker)

  }



}
