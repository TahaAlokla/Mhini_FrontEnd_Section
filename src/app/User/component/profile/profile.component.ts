import { Router } from '@angular/router';
import { AuthUserService } from './../../../service/auth-user.service';
import { TokenStorageService } from './../../../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  errorMessageDelete = '';
  isSuccessfulDeleteMassage = false;

  constructor(private token: TokenStorageService, private AuthUserService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  deleteUserAccount(idUser: string) {
    console.log(idUser);
    this.AuthUserService.deleteUser(idUser).subscribe(result => {
      this.isSuccessfulDeleteMassage= true
      // for delete token ang logout user
      this.logout()
      // for router redirect register user
      // this.router.navigate(['user/registerUser'])
      // console.log(result);
    }, err => {
      console.log(err);
      this.errorMessageDelete = err.error.massage || err.error.errorsValidation;

    })


  }

}
