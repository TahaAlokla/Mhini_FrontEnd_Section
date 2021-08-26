import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthUserService } from './../../../service/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show: boolean = false;
  hide=true



  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthUserService,
    private tokenStorageService: TokenStorageService ,
     private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()&&(Object.keys(this.tokenStorageService.getUser()).length)) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().userData.typeUser;
    }
  }
  onSubmit(): void {

    const { phoneNumber, password } = this.form;
    console.log(phoneNumber, password);

    this.authService.loginUser(phoneNumber, password).subscribe(
      data => {
        console.log('data login ', data);
        // print token
        //  console.log(data.token);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = data.userData.typeUser
        this.reloadPage();
      },
      err => {
        console.log(err, 'err login user')
        this.errorMessage = err.error.massage || err.error.errorsValidation;
        // console.log(err.error.message);
        console.log(this.errorMessage)
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

// click event function toggle
  password() {
    this.show = !this.show;
  }

}
