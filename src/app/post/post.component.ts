import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: Router,private auth:AuthService) { }
  title = 'post'
  ngOnInit(): void {
    this.auth.checkLogout();
  }

  Logout(){
    localStorage.removeItem('id');
    this.route.navigate(['/login']);
  }
}
