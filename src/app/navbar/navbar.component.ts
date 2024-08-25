import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor( private _user: UserService ) {

    this.isLoggedIn = this._user.isAuthenticated();

  }

  logout() {
    this._user.logout();
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    // this.isLoggedIn = this._user.isAuthenticated()
  }



}
