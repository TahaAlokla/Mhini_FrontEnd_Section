import { Injectable } from '@angular/core';
const TOKEN_KEY = '';
const Admin_KEY="auth-admin"
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  // singOut user | can you use to logout any type user [ worker | admin | normal user ]

  signOut(): void {
    window.sessionStorage.clear();
  }

  // save Token
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // get Token
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  // save user
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // save Admin
  public saveAdmin(Admin: any): void {
    window.sessionStorage.removeItem(Admin_KEY);
    window.sessionStorage.setItem(Admin_KEY, JSON.stringify(Admin));
  }


  // get User
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  // * get Admin
  public getAdmin(): any {
    const Admin = window.sessionStorage.getItem(Admin_KEY);
    if (Admin) {
      return JSON.parse(Admin);
    }
    return {};
  }


}
