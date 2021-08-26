import { AuthUserService } from './../../../service/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
// for select box city register form
  city:string[]=["دمشق","حلب","درعا","حماة","حمص"]
  citesWorker:any
  // massage wronging
  // ***************** Massage For register Form *********************
  userNameRequiredMassage:String="اسم المستخدم مطلوب "
  passwordRequiredMassage:String="كلمة السر مطلوبة"
  userNameMinLength:String="اسم المستخدم لا يقل عن حرفين"
  passwordMinLength:String="كلمة السر لا تقل عن 6 حروف أو ارقام "
  // *********************************************************
  form: any = {
    username: null,
    phoneNumber: null,
    password: null,
    city:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  hide:boolean=false
  hide1:boolean=false

  constructor(private AuthUserService:AuthUserService,private router:Router) { }

  ngOnInit(): void {
     //*  get All cites
     this.AuthUserService.getAllCitesAvailable().subscribe(data=>{
      console.log('cites available',data.citesArray);
      this.citesWorker = data.citesArray
    }, err => {
      console.log(err);
    }
    )


  }

  onSubmit(): void {
    const { username, phoneNumber, password ,city} = this.form;
    console.log(username, phoneNumber, password ,city);
    this.AuthUserService.registerUser(username, phoneNumber, password,city).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      err => {
        // console.log(err);
        this.errorMessage =err.error.massage||err.error.errorsValidation;
        this.isSignUpFailed = true;
      }
    );
  }

  redirectLoginUser(){
    if(this.isSuccessful){
      this.router.navigate(['../../user/loginUser'])
    }
  }

}
