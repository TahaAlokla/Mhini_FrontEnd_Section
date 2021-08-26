

import { AuthUserService } from './../../../service/auth-user.service';

import { Component, ElementRef, OnInit } from '@angular/core';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { ServiceUsService } from 'src/app/service/service-us.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-worker',
  templateUrl: './register-worker.component.html',
  styleUrls: ['./register-worker.component.scss']
})
export class RegisterWorkerComponent implements OnInit {
  isCheckedRequired: boolean = false
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  hide: boolean = true
  hide1: boolean = true
  isWorkerSuccessRegister: boolean = false
  form: any = {
    username: null,
    phoneNumber: null,
    password: null,
    city: null,
    ImageWorker: null,
    gander: null,
    birthdayWorker: null,
    JobWorker: null,
    JobDescriptionWorker: null,
    AddressWorker: null
  };
  // for select box city register form
  // citesWorker: string[] = ["دمشق", "حلب", "درعا", "حماة", "حمص"]
  citesWorker: any
  ganderWorker: String[] = ["ذكر", "أنثى"]
  servicesProviderWorker: any
  // massage wronging
  // ***************** Massage For register Form *********************
  userNameRequiredMassage: String = "اسم المستخدم مطلوب "
  passwordRequiredMassage: String = "كلمة السر مطلوبة"
  userNameMinLength: String = "اسم المستخدم لا يقل عن حرفين"
  passwordMinLength: String = "كلمة السر لا تقل عن 6 حروف أو ارقام "
  // *********************************************************

  constructor(
    private AuthUserService: AuthUserService,
    private router: Router,
    private serviceUs: ServiceUsService) {

  }
  workerImage: any
  fileSelecte(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.workerImage = selectedFile

    console.log(this.workerImage);

  }


  result: any
  ngOnInit() {

    this.serviceUs.getAllServicesUs().subscribe(data => {
      this.servicesProviderWorker = data.services
      console.log(data);
      this.result = this.servicesProviderWorker
      console.log(this.servicesProviderWorker, this.result);

    }, err => {
      console.log(err);

    })

    //*  get All cites
    this.AuthUserService.getAllCitesAvailable().subscribe(data=>{
      console.log('cites available',data.citesArray);
      this.citesWorker = data.citesArray
    }, err => {
      console.log(err);
    }
    )
  }


  // * submit form [ register worker]
  onSubmit(): void {

    const formData = new FormData()
    const {
      username,
      phoneNumber,
      password,
      city,
      gander,
      birthdayWorker,
      JobWorker,
      JobDescriptionWorker,
      AddressWorker
    } = this.form;

    formData.append('workerImage', this.workerImage);
    formData.append('username', username);
    formData.append('password', password);
    formData.append("phoneNumber", phoneNumber)
    formData.append("city", city)
    formData.append("workerGender", gander)
    formData.append("workerAge", birthdayWorker)
    formData.append("service", JobWorker)

    // descriptionService
    formData.append("descriptionService", JobDescriptionWorker)
    // workerAddress
    formData.append("workerAddress", AddressWorker)
    // console.log(typeof (birthdayWorker), birthdayWorker);

    console.log(formData);

//  post date [worker data to auth service register worker]
    this.AuthUserService.registerWorker(formData).subscribe(result => {
      console.log(result);
      this.isSuccessful = true;
      this.isWorkerSuccessRegister= true;
      this.isSignUpFailed = false;

    }, err => {

      this.errorMessage = err.error.massage || err.error.errorsValidation;
      this.isSignUpFailed = true;
      console.log(err);
      console.log(this.errorMessage);


    })

  }




  onChange(ob: MatCheckboxChange) {
    this.isCheckedRequired = ob.checked
    // console.log("PQR checked: " + ob.checked);
  }
  redirectLoginUser() {
    if (this.isSuccessful) {
      this.router.navigate(['../../user/loginUser'])
    }
  }





}
