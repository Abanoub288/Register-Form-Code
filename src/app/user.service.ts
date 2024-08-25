import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor (private _router : Router) {}




  private isLoggedIn = false;

  login() {
    this._router.navigate(['/home'])
    this.isLoggedIn = true;
  }

  logout() {
    this._router.navigate(['/login'])
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }



  // login() {
  //   this._router.navigate(['/home'])
  //   this.isLoggedIn = true;
  // }

  // logout() {
  //   this._router.navigate(['/login'])
  //   this.isLoggedIn = false;
  // }

  // isAuthenticated() {
  //   return this.isLoggedIn;
  // }

}
