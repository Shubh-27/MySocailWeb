import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { login } from '../model/login';
import { LoginRegisterService } from '../services/login-register.service';
import { AuthService } from '../services/auth.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;
  
  constructor(private route: Router, private service: LoginRegisterService, private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.checkLogin();
    this.invalidLogin = false;
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  data: any;
  Register() {
    this.route.navigate(['/register'])
  }
  Dissmiss(){
    this.invalidLogin = false;
  }

  Login(form: FormGroup) {
    if (form.valid) {
      this.service.postLogin(form.value).subscribe(data => {
        this.data=data;
        if (this.data != null || this.data != undefined) {
          localStorage.setItem('id', this.data);
          this.route.navigate(['/post']);
        }
        else{
          this.invalidLogin = true;
          this.route.navigate(['/login']);
        }
      });
    }
    else {
      this.route.navigate(['/login']);
    }
  }
}
