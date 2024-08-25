import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private FormBuilder:FormBuilder, private router:Router) {}

  registerForm: FormGroup = new FormGroup ({
    firName: new FormControl (null, [Validators.required]),
    lasName: new FormControl (null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: this.FormBuilder.array(['']),
    adress: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, {validators: this.passwordMatch})

  handelRgister(registerForm:FormGroup) {
    if (registerForm.valid) {
      this.router.navigate(['/login'])
    }
  }

  get phoneNumbers() {
    return this.registerForm.get('phone') as FormArray;
  }

  addMobile() {
    this.phoneNumbers.controls.push(new FormControl(null, [Validators.required]))
  }

  passwordMatch(registerForm:any) {
    let password = registerForm.get('password');
    let confirmPassword = registerForm.get('confirmPassword');
    if (password.value === confirmPassword.value) {
      return null;
    } else {
      confirmPassword.setErrors({passwordMatch: 'password and confirmPassword not march'})
      return {password: 'password and confirmPassword not match'}
    }
  }

  ngOnInit(): void {

  }
}
