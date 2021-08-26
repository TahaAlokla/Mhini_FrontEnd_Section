import { TokenStorageService } from './service/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private title: Title, private tokenStorageService: TokenStorageService) {
    this.title.setTitle('مهني')
  }

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


 public logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
