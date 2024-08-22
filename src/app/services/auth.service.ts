import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  checkLogin() {
    if (localStorage.getItem('id'))
      this.route.navigate(['/post']);
  }
  checkLogout() {
    if (!localStorage.getItem('id'))
      this.route.navigate(['/login']);
  }
}
