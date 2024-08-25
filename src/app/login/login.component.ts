import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean;


  constructor( private _user: UserService) {
    this.isLoggedIn = this._user.isAuthenticated()
  }



  loginForm: FormGroup = new FormGroup ({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  })

  handelLogin(loginForm:FormGroup ) {

  }

  login () {
    this._user.login()
    this.isLoggedIn = false
  }

  ngOnInit(): void {
    // this._user.login()
    this.isLoggedIn ;
  }
}
