import { NotfiactionService } from './service/notfiaction.service';
import { TokenStorageService } from './service/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private roles: string='';
   isLoggedIn = false;
   isWorkerLogin:boolean=false;
   isUserLogin:boolean=false;
   isAdminLogin:boolean=false
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private title: Title, private tokenStorageService: TokenStorageService , private notificationService: NotfiactionService , private _snackBar: MatSnackBar) {
    this.title.setTitle('مهني')
  }


  resultOrderNotfictionApp:any={}
  ngOnInit(): void {

    this.isLoggedIn = !!(((this.tokenStorageService.getToken())&&(Object.keys(this.tokenStorageService.getUser()).length)));
    console.log(this.isLoggedIn, 'this.isLoggedIn');
    console.log(this.tokenStorageService.getUser());


    //   return true if admin success login
    this.isAdminLogin= !!(((this.tokenStorageService.getToken())&&(Object.keys(this.tokenStorageService.getAdmin()).length)))

    console.log(this.isAdminLogin,'this.isAdminLogin');

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user)
      // check type user if [ normal user or worker]
      this.roles = user.userData.typeUser;
      if(this.roles==="worker"){
        this.notificationService.onNewNotification().subscribe(resultOrderNotfiction=>{

          this.resultOrderNotfictionApp = resultOrderNotfiction
          console.log (this.resultOrderNotfictionApp.objectOrder.IdClient.username);
          // this.openSnackBar(` وصول إشعار طلب خدمة جديد من ${this.resultOrderNotfictionApp.IdClient.username}`)
          this.openSnackBar("وصلك اشعار جديد من "+this.resultOrderNotfictionApp.objectOrder.IdClient.username)
        })

        this.isWorkerLogin=true
      } else {
        this.isUserLogin=true

      }
      console.log(this.roles);


      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.userData.username;
    }
  }
  openSnackBar(massage: any,) {
    this._snackBar.open(massage, 'اغلاق', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 250000,
    });
  }



 public logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
