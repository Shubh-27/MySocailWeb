import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DisplayPostService } from '../../services/display-post.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthService, private displayPost : DisplayPostService) { }
  
  form = new FormGroup({
    userid: new FormControl(Number(localStorage.getItem('id'))),
    posttext: new FormControl('', [Validators.required]),
  });
  
  data : any
  ngOnInit(): void {
    this.auth.checkLogout();
    this.displayPost.getPost(Number(localStorage.getItem('id'))).subscribe(dt=> {
      this.data = dt
    })
  }

  post(form : FormGroup){
    if(form.valid){
    (<HTMLButtonElement>document.getElementById("postButton")).disabled=true;
      this.displayPost.addPost(this.form.value).subscribe(dt=>{
        if(dt)
          window.location.reload();
      })
    }
    else{
      alert("Try again");
      window.location.reload();
    }
  }
  
}
