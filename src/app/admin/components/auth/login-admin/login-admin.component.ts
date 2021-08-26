import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  show: boolean = false;
  hide=true
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  isSuccessful=false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthUserService,
    private tokenStorageService:TokenStorageService,
     private tokenStorage: TokenStorageService, private router: Router , private authAdminService: AdminService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()&&(Object.keys(this.tokenStorageService.getAdmin()).length)) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getAdmin().userData.typeUser;
      // typeUser
      this.roles = this.tokenStorage.getAdmin().typeUser;
    }
  }


  onSubmit(): void {

    const { phoneNumber, password } = this.form;
    console.log(phoneNumber, password);

    this.authAdminService.loginAdmin(phoneNumber, password).subscribe(
      data => {
        console.log('data admin  login ', data);
        // print token
        //  console.log(data.token);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveAdmin(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.isSuccessful= true;
        this.roles = data.typeUser
        this.redirectLoginDashboard();

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
  redirectLoginDashboard() {
    if (this.isSuccessful) {
      this.router.navigate(['/admin/dashboard'])
    }
  }

// click event function toggle
  password() {
    this.show = !this.show;
  }

}
