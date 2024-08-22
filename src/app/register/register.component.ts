import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginRegisterService } from '../services/login-register.service';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router, private service: LoginRegisterService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.checkLogin();
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  data: any;
  Login() {
    this.route.navigate(['/login'])
  }
  async Register() {
    if (this.form.valid) {
      this.service.postRegister(this.form.value).subscribe(data => {
        if(data)
          this.route.navigate(['/login']);
      });
    }
    else {
      this.route.navigate(['/register']);
    }
  }
}
