import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss']
})
export class WorkerProfileComponent implements OnInit {

  currentUser: any;
  errorMessageDelete = '';
  isSuccessfulDeleteMassage = false;

  constructor(private token: TokenStorageService, private AuthUserService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser, 'this current user ');
    console.log(this.currentUser.workerProfile);
    


  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  deleteUserAccount(idUser: string) {
    console.log(idUser);
    this.AuthUserService.deleteWorker(idUser).subscribe(result => {
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
